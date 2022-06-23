  import axios from 'axios'
  const stripe = require("stripe")(process.env.STRIPE_SECRET)
  import jwt from 'jsonwebtoken'
  let params;
  let paymentIntent;
  let newID;
  let coupons = [];
  const verifyIntent = async (req, res) => {
      params = JSON.parse(req.body)

      //if new account is null and so is authtoken, return error and end immediately
      if (params.newAccount === null && params.token === null) {return res.status(400)};

      //if new account is not null, and authtoken is not null, return error (and try to clearn authtoken?).
      if (params.newAccount !== null && params.token !== null) {return res.status(400)};

      if (params.intent == null) return res.status(400); //no payment intent included in check, exit.
      paymentIntent = await stripe.paymentIntents.retrieve(params.intent);
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
      if (JSON.stringify(metacart) !== paymentIntent.metadata.cart) return res.status(400); // cart from intent and verifier mismatch, exit.
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
                           coupons.push(safeCode)
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
      if (couponInvalid === true) return res.status(400).json({success: false}) //funny business going on with coupons (mismatch), exit.
      if (totalCartPrice != paymentIntent.amount) return res.status(400); //intent and cart checker price mismatch.
      if (paymentIntent.status !== "succeeded") return res.status(400); //not successfull transaction

      //if new account is not null, and authtoken is null, try to process new account.
      if (params.newAccount !== null && params.token === null) {
          const newUser = await createNewUser(params.newAccount);
          let subscription1 = params.cart.find(e => e.ID === 105);
          let course1 = params.cart.find(e => e.ID === 101);
          if (subscription1 != null) await createSubscription(paymentIntent.customer, paymentIntent.payment_method);
          if (course1 != null) await addCourse(newID);
          if (params.savePayment === false) await deleteCard(paymentIntent.payment_method)
          return res.status(200).json({new: true, newUser})
          // still need to create woo order
      }
      
      //if new account is null, and authtoken is not null, try to process authtoken.
      if (params.newAccount === null && params.token !== null) {
          try {
              jwt.verify(params.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
                  await saveUser(decoded.data.user.id); //saves acf data
                  await createOrder(decoded.data.user.id);
                  let subscription1 = params.cart.find(e => e.ID === 105);
                  let course1 = params.cart.find(e => e.ID === 101);
                if (subscription1 != null) await createSubscription(paymentIntent.customer, paymentIntent.payment_method);
                if (course1 != null) await addCourse(decoded.data.user.id);
                if (params.savePayment === false) await deleteCard(paymentIntent.payment_method)
                  return res.status(200).json(true)
                  // still need to create woo order
                });
              } catch (e) {
                  return res.status(401); //jwt not valid
                }
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

  function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }
    return result;
    }

    const createNewUser = async (newEmail) => {

      let data = {
          'username': newEmail.replace(/[^a-zA-Z0-9]/g, ''),
          'email': newEmail,
          'password': makeid(48),
          'url':'http://notregistered',
          "acf": {
              "customer_id": paymentIntent.customer,
                }
        }
        if (params.shippingData !==null) {
          let tempship = [{
      "first_name": params.shippingData.shippingname,
      "last_name": '',
      "address_1": params.shippingData.shippingaddress1,
      "address_2": params.shippingData.shippingaddress2,
      "city": params.shippingData.shippingcity,
      "state": params.shippingData.shippingstate,
      "postcode": params.shippingData.shippingzip,
      "country": params.shippingData.shippingcountry
          }]
       data.acf['shippingaddress1'] = JSON.stringify(tempship)
      }

        
        if (params.metafield !== null) {
          data.acf[params.metafield] = params.metavalue
        }

        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ` + process.env.REST_SECRET,
          }
        };
        
        const responser = await axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users', JSON.stringify(data), axiosConfig)
        .then((resp) => {
            try {
              newID = resp.data.id
              createOrder(resp.data.id)
            } catch(erro) {
                return erro
            }
        
          var newJWT = jwt.sign({  data: {
              user: {
                id: resp.data.id,
                user_email: resp.data.email
              }
            } }, process.env.JWT_SECRET);
        return newJWT;
        })
        .catch((err) => {
        return err;
        })
        return responser;
  }

  const saveUser = async(userID) => {
      let data = {
          "acf": {
              "customer_id": paymentIntent.customer,
                }
        }


        if (params.shippingData !==null) {
          let tempship;
          if (params.previousShippingData !== '') {
            let tempdata = JSON.parse(params.previousShippingData)
            let newtempdata = {
              "first_name": params.shippingData.shippingname,
              "last_name": '',
              "address_1": params.shippingData.shippingaddress1,
              "address_2": params.shippingData.shippingaddress2,
              "city": params.shippingData.shippingcity,
              "state": params.shippingData.shippingstate,
              "postcode": params.shippingData.shippingzip,
              "country": params.shippingData.shippingcountry
                  }
            tempdata.push(newtempdata)
            tempship = tempdata
          } else {
            tempship = [{
              "first_name": params.shippingData.shippingname,
              "last_name": '',
              "address_1": params.shippingData.shippingaddress1,
              "address_2": params.shippingData.shippingaddress2,
              "city": params.shippingData.shippingcity,
              "state": params.shippingData.shippingstate,
              "postcode": params.shippingData.shippingzip,
              "country": params.shippingData.shippingcountry
            }]
          }
          
       data.acf['shippingaddress1'] = JSON.stringify(tempship)
      }


        if (params.metafield !== null) {
          data.acf[params.metafield] = params.metavalue
        }

        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ` + process.env.REST_SECRET,
          }
        };
        
        const responser = await axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + userID, JSON.stringify(data), axiosConfig)
        .then((res) => {
        return res;
        })
        .catch((err) => {
        return err;
        })
        return responser;
  }

  const createOrder = async(userID) => {
      let axiosConfig = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ` + process.env.WC_SECRET,
          }
        };
        let orderCart = [];

        params.cart.forEach(o => {
          let tempQuantity = o.quantity;
          if ('cquantity' in o) tempQuantity += o.cquantity

    orderCart.push({'product_id':o.ID, 'quantity': tempQuantity})
});
        let data = {
          "set_paid": true,
          "status": "completed",
          "customer_id": userID,
          "line_items": orderCart,
        }

      if (params.shippingData !==null) {
          data.shipping = {
      "first_name": params.shippingData.shippingname,
      "last_name": '',
      "address_1": params.shippingData.shippingaddress1,
      "address_2": params.shippingData.shippingaddress2,
      "city": params.shippingData.shippingcity,
      "state": params.shippingData.shippingstate,
      "postcode": params.shippingData.shippingzip,
      "country": params.shippingData.shippingcountry
          }
      }
      if (coupons.length > 0) {
        let couponLineData = [];
        coupons.forEach((cou, index) => {
          couponLineData.push({'code': cou})
        })
        data.coupon_lines = couponLineData;
      }
      console.log(JSON.stringify(data))
        const responser = await axios.post('https://portal.revrevdev.xyz/wp-json/wc/v3/orders', JSON.stringify(data), axiosConfig)
        .then((resp) => {
        return resp;
        })
        .catch((err) => {
        return err;
        })
        return responser;
  }

  const deleteCard = async(paymentID) => {

    const deleted =  await stripe.paymentMethods.detach(
      paymentID
    );
      return deleted
  }

  const createSubscription = async(customerID, paymentID) => {
    

      const subscription = await stripe.subscriptions.create({
          customer: customerID,
          items: [
              {price: 'price_1KkQhpEIi9OXKxaBOPNTGrf0'},
            ],
          default_payment_method: paymentID,
          trial_end: Math.round((new Date).setMonth((new Date).getMonth()+1) / 1000)
        });

        return subscription;
  }

  const addCourse = async(customerID) => {
    const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=add_new_member&course_id=134&user_id=' + customerID).then(resp => {    
      return resp.data;
  });
  return exists;

  }


  
const getCoupon = async(code) => {
  const exists = await axios.get('https://portal.revrevdev.xyz/wp-json/wc/v3/coupons/?code=' + code, {headers: { Authorization: `Basic ` + process.env.WC_SECRET}}).then(resp => {    
    return resp.data;
});
return exists;

}

  export default verifyIntent;
