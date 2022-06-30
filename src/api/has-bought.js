
import jwt from 'jsonwebtoken'
import axios from 'axios'


let params;
const validateJWT = async (req, res) => {
    params = JSON.parse(req.body)
    //validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
        try {
                jwt.verify(params.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
                  if (params.product === 1735) {
                    //entrepreneurial espresso sub
                    let customerID = await getCustomerID(decoded.data.user.id);
                    if (customerID.acf.customer_id === undefined || customerID.acf.customer_id === '') {
                      return res.status(200).json(false);
                    } 
                    const paymentMethod = await getPaymentMethods(customerID.acf.customer_id);
                    if (paymentMethod.data.length === 0)  return res.status(200).json(false);
                    let activeto1735 = false;
                    paymentMethod.data.forEach((sub, index) => {
                      if (sub.plan.id === 'price_1LFzPWEIi9OXKxaBADloi95c'){
                        activeto1735 = true;
                      }
                  })
                    if (activeto1735 === true) {
                      let customerID = {
                        success: 1
                      }
                      return res.status(200).json({customerID})
                    }
                    return res.status(200).json(false);
                  }
                const customerID = await addCourse(decoded.data.user.id, params.product);
                return res.status(200).json({customerID})
             
           });
          } catch (e) {
            res.json({body: 'error ' + e})
          } 
    }

const addCourse = async(customerID, productID) => {
    const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=has_bought&product_id=' + productID + '&user_id=' + customerID).then(resp => {    
      return resp.data;
    });
    return exists;

}

const getCustomerID = async (uID) => {
  let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ` + process.env.REST_SECRET,
      }
    };
   const responser = await axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + uID, axiosConfig).then(resp => {    
     return resp.data;
  });
  return responser;
}

async function getPaymentMethods(cID) {
  const paymentMethods = await stripe.subscriptions.list({
    customer: cID
  });
  return paymentMethods;
}

export default validateJWT
