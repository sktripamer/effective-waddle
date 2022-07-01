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
            if (paymentMethod.data.length === 0)  return res.status(200).json({failed:true});

            for (let i=0; i< paymentMethod.data.length; i++) {
              if (paymentMethod.data[i].default_payment_method === params.pid) {
                return res.status(200).json({exists:true});
              }
            }
            const deleter = await deleteMethod(customerID.acf.customer_id, params.pid)
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


async function deleteMethod(cID, pID) {
  const deleted = await stripe.customers.deleteSource(
    cID,
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
