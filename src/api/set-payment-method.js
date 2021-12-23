import fetch from "node-fetch"
import jwt from 'jsonwebtoken'
import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const setMethod = async (req, res) => {


try {
 
   
        //return decoded.data.user.user_email;
        //res.status(200).json(decoded.data.user.user_email)
       const emails = req.body.split('@@')
        // const customerID = await stripe.customers.listPaymentMethods(
        //     req.body.split('@@')[0],
        //     {type: 'card'}
        // );
        jwt.verify(emails[1], process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
        const customerID = await createCustomer(emails[0]);
        const paymentIntent = await createIntent(customerID, decoded.data.user.id);
         
      return await res.status(200).json(paymentIntent);
     // return res.status(200).json({customerID})
   });
  } catch (e) {
    res.json({body: 'error ' + e})
  }

}

const createCustomer = async (cID) => {

    try {
      // get payment method
      const customerID = await stripe.customers.listPaymentMethods(
        cID,
        {type: 'card'}
      );
      
      return customerID.data[0].id;
     //return customerID;
  
    } catch (error) {
      return error;
    }
    
  }

  const createIntent = async (cID, uID) => {
    const data = {
        "acf": {
            "payment_method": cID,
              }
      }
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
      };
      
      axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + uID, JSON.stringify(data), axiosConfig)
    try {
    
      return 'success';
    } catch (error) {
        return error;
    }
    
  }
  

export default setMethod


