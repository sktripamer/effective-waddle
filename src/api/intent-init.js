import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET);
import jwt from 'jsonwebtoken';
let params;

const getIntent = async (req, res) => {
    params = JSON.parse(req.body);
   // return res.status(200).json({'first':params})

    //if new account is null and so is authtoken, return error and end immediately
    if (params.newAccount === null && params.token === null) {return res.status(400)};

    //if new account is not null, and authtoken is not null, return error (and try to clearn authtoken?).
    if (params.newAccount !== null && params.token !== null) {return res.status(400)};

    //if new account is not null, and authtoken is null, try to process new account.
    if (params.newAccount !== null && params.token === null) {
        //return res.status(200).json({'here':'hello'})
        const exists = await axios.get('https://portal.revrevdev.xyz/wp-json/tv5hoq1wzdbgy0y6y4s8krvqvp759kc03vu7snia/user-exists?email=' + encodeURIComponent(params.newAccount)).then(resp => {    
            return resp.data;
        });
        //we check to make sure that the account isn't registered yet on WP's side. We won't yet create the account on WP's side - after payment verification we do that (ontraport has substantial lag of 10+ seconds with initial user creation syncing).
        if (!exists) {
            const customerID = await createCustomer(params.newAccount);

            let couponInvalid = false;
            let total = 0;
            const mapLoop = async _ => {
                const promises = params.cart.map(async pID => {
                    const priceOfProduct = await getPrice(pID)
                    if (pID.ctype === 'fp1') {
                       const safeCode = pID.code.replace(/[^a-zA-Z0-9]/g, "");
                       const couponInfo = await getCoupon(safeCode)
                       console.log(couponInfo)
                       if (couponInfo.length === 1) {
                           console.log(couponInfo.length)
                           if (couponInfo[0].discount_type === 'fixed_product' && couponInfo[0].limit_usage_to_x_items === 1) {
                               let productMatch = false;
                               couponInfo[0].product_ids.forEach((couponProduct, index) => {
                                   if (couponProduct == pID.ID) productMatch = true;
                               })
                               if (productMatch === true) {
                                   let productprice = parseInt(priceOfProduct);
                                   total += (productprice * pID.quantity) + (productprice -(100 * parseFloat(couponInfo[0].amount)))

                               }
                           } else {
                            couponInvalid = true;
                           }
                        
                       } else {
                        couponInvalid = true;
                       }
                       
                    } else {
                       total += (parseInt(priceOfProduct) * pID.quantity)
                    }
                    
                    return priceOfProduct
                })
                const totalPrice = await Promise.all(promises)
                return total;
            }
            const totalCartPrice = await mapLoop();
            if (couponInvalid === true) return res.status(400).json({success: false}) 
           const paymentIntent = await createIntent(customerID, totalCartPrice);
           return res.status(200).json({paymentIntent})
        } else {
            return res.status(409); //email already exists on WP's side.
        }   
    }

    //if new account is null, and authtoken is not null, try to process authtoken.
    if (params.newAccount === null && params.token !== null) {

        try {
        jwt.verify(params.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
             const customerID = await getCustomer(decoded.data.user.id); // tries to retrieve the ACF data (stripe customer ID) associated with the decoded JWT
             let couponInvalid = false;
             let total = 0;
             const mapLoop = async _ => {
                 const promises = params.cart.map(async pID => {
                     const priceOfProduct = await getPrice(pID)
                     if (pID.ctype === 'fp1') {
                        const safeCode = pID.code.replace(/[^a-zA-Z0-9]/g, "");
                        const couponInfo = await getCoupon(safeCode)
                        if (couponInfo.length === 1) {
                            if (couponInfo[0].discount_type === 'fixed_product' && couponInfo[0].limit_usage_to_x_items === 1) {
                                let productMatch = false;
                                couponInfo[0].product_ids.forEach((couponProduct, index) => {
                                    if (couponProduct == pID.ID) productMatch = true;
                                })
                                if (productMatch === true) {
                                    let productprice = parseInt(priceOfProduct);
                                    total += (productprice * pID.quantity) + (productprice - (100 * parseFloat(couponInfo[0].amount)))

                                }
                            } else {
                                couponInvalid = true;
                            }
                          
                        } else {
                            couponInvalid = true;
                        }
                    
                     } else {
                        total += (parseInt(priceOfProduct) * pID.quantity)
                     }
                     
                     return priceOfProduct
                 })
                 const totalPrice = await Promise.all(promises)
                 return total;
             }
             const totalCartPrice = await mapLoop();
             if (couponInvalid === true) return res.status(400).json({success: false}) 
             if (customerID === '') { //no saved customer ID on stripe, so we create a new one and pass off that intent.
                const newCustomerID = await createCustomer(params.newAccount);
                const paymentIntent = await createIntent(newCustomerID, totalCartPrice);
                return res.status(200).json({paymentIntent});
             } else {
                 //create an intent with the saved customer ID.
                const paymentIntent = await createIntent(customerID, totalCartPrice);
                return res.status(200).json({paymentIntent});
             }

              
          });
        } catch (e) {
            return res.status(401); //jwt not valid
          }
    }
}



const createCustomer = async (emailSend) => {
    try {

      const customerID = await stripe.customers.create({
        email: emailSend
      });
      
      return customerID.id;
  
    } catch (error) {
      return error;
    } 

}

const getCustomer = async (uID) => {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
    };
    const responser = await axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + uID, axiosConfig)
    .then(resp => {  
       return resp.data.acf.customer_id;
    })
    .catch((err) => {
        return err;
       })
    return responser;
}

const createIntent = async (cID, cartTotal) => {
    let metacart = []
    params.cart.forEach((item, index) => {
        let pusher;
        if (item.ctype === 'fp1') {
            pusher = {
                i: item.ID,
                q: item.quantity,
                p: item.price,
                t: item.total,
                c: item.code,
                cq: item.cquantity,
                cp: item.cprice
            }
        } else {
            pusher = {
                i: item.ID,
                q: item.quantity,
                p: item.price,
                t: item.total
            }
        }  
    metacart.push(pusher)
})
    try {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: cartTotal,
        currency: 'usd',
        customer: cID,
        setup_future_usage: "off_session",
        metadata: {'cart': JSON.stringify(metacart)},
      });
     
      return paymentIntent;
    } catch (error) {
        return error;
    }  
}

const getPrice = async (pID) => {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.WC_SECRET,
        }
    };
      const responser = await axios.get('https://portal.revrevdev.xyz/wp-json/wc/v3/products/' + pID.ID, axiosConfig)
      .then(resp => {

          //if cart contains coupon for this ID, double check the coupon is valid as such, and reduce price
        if (resp.data.price.includes('.')) {
            return resp.price.replace(/\./g, '');
        } else {
          return resp.data.price + '00';
        }
      })
      .catch((err) => {
          return err;
         })
      return responser;
}

const getCoupon = async(code) => {
    const exists = await axios.get('https://portal.revrevdev.xyz/wp-json/wc/v3/coupons/?code=' + code, {headers: { Authorization: `Basic ` + process.env.WC_SECRET}}).then(resp => {    
      return resp.data;
  });
  return exists;

  }

export default getIntent;
