import jwt from 'jsonwebtoken'
import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET);
let params;

const validateJWT = async (req, res) => {
//validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
params = JSON.parse(req.body)
    try {
            jwt.verify(params.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
            const customerID = await getCustomerID(decoded.data.user.id);

            if (customerID.acf.customer_id === undefined || customerID.acf.customer_id === '') {
              return res.status(200).json({failed:true});
            } 
            
            const paymentMethod = await getPaymentMethods(customerID.acf.customer_id);
            if (paymentMethod.data.length === 0) {
              const deleter = await deleteMethod(params.pid)
              return res.status(200).json({deleter})
            } 

            for (let i=0; i< paymentMethod.data.length; i++) {
              if (paymentMethod.data[i].plan.active === false) continue; //plan isnt active, so we can ignore regardless
              if (paymentMethod.data[i].default_payment_method === params.pid) {
                if (paymentMethod.data[i].cancel_at_period_end === false) {
                  return res.status(200).json({exists:true}); //if the sub has this payment method as its default, and it hasn't been canceled, return no, we cant delete
                }
                
              }
            }
            const deleter = await deleteMethod(params.pid)
            return res.status(200).json({deleter})
         
       });
      } catch (e) {
        res.json({body: 'error ' + e})
      } 
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


async function deleteMethod(pID) {
  const deleted = await stripe.paymentMethods.detach(
    pID
  );
  return deleted;
}


  async function getPaymentMethods(cID) {
      const paymentMethods = await stripe.subscriptions.list({
        customer: cID
      });
      return paymentMethods;
  }


export default validateJWT
