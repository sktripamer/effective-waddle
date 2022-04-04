import jwt from 'jsonwebtoken'
import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const validateJWT = async (req, res) => {
//validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
    try {
            jwt.verify(req.body, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
            const customerID = await getCustomerID(decoded.data.user.id);
            if (customerID == '') return res.status(200);
            const paymentMethod = await getPaymentMethods(customerID);
            let sublist = {};
            for (let i=0; i< paymentMethod.data.length; i++) {
              getPaymentMethod(paymentMethod.data[i].default_payment_method)
              sublist[i] = {
                sub: paymentMethod.data[i],
                pm: getPaymentMethod(paymentMethod.data[i].default_payment_method)
            }
            }
            return res.status(200).json({sublist})
         
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
       return resp.data.acf.customer_id;
    });
    return responser;
}


  async function getPaymentMethods(cID) {
      const paymentMethods = await stripe.subscriptions.list({
        customer: cID
      });
      return paymentMethods;
  }

  async function getPaymentMethod(pm) {
      const paymentMethod =  await stripe.paymentMethods.retrieve(
        pm
      );
      return paymentMethod;
  
  }

export default validateJWT