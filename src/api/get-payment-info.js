import jwt from 'jsonwebtoken'
import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const validateJWT = async (req, res) => {
//validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
    try {
            jwt.verify(req.body, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
            const customerID = await getPaymentID(decoded.data.user.id);
            //const paymentIntent = await createIntent(customerID, decoded.data.user.id);
             
          return await res.status(200).json(customerID);
         // return res.status(200).json({customerID})
       });
      } catch (e) {
        res.json({body: 'error ' + e})
      } 
}


const getPaymentID = async (uID) => {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
      };
      
      axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + uID, axiosConfig)
      .then((response) => {
        const paymentMethod = await stripe.paymentMethods.retrieve(
            response.data.acf.payment_method
          );
          return paymentMethod.card.last4;
    })
}


export default validateJWT
