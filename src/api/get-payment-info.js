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
    return functionA(uID)
}


async function functionA(uID) {
    console.log('first');
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic YWRtaW46YWZhOSBvNTJSIG9uNWsgUVdHTCA4M0dMIHVlR3I=`
      }
    };
    axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + uID, axiosConfig).then(resp => {
  
     return functionB(resp.data.acf.payment_method);
  });
  }
  
  async function functionB(pm) {
    console.log('second', pm);
    const paymentMethod =  await stripe.paymentMethods.retrieve(
      pm
    );
    return paymentMethod;
  }

export default validateJWT
