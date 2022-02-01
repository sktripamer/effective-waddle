import jwt from 'jsonwebtoken'
import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET);
let parsedVar;
const validateJWT = async (req, res) => {
  parsedVar = req.body
//validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
const paymentIntent = await stripe.paymentIntents.retrieve(
  parsedVar.transactionid
);

if (paymentIntent.status === "succeeded") {
  try {
    jwt.verify(parsedVar.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
    const customerID = await getPaymentID(decoded.data.user.id);
   // const paymentMethod = await getPaymentMethod(customerID);
    //const paymentIntent = await createIntent(customerID, decoded.data.user.id);
     
 // return res.status(200).json(decoded.data.user.id);
  return res.status(200).json({customerID})
});
} catch (e) {
res.json({body: 'error ' + e})
} 
} else {
  return res.status(400);
}

}


const getPaymentID = async (uID) => {

    const data = {
        "acf": {
            "preorder": true,
            "shippingname": parsedVar.shippingname,
            "shippingaddress1": parsedVar.shippingaddress1,
            "shippingaddress2": parsedVar.shippingaddress2,
            "shippingcity": parsedVar.shippingcity,
            "shippingstate": parsedVar.shippingstate,
            "shippingzip": parsedVar.shippingzip,
            "shippingcountry": parsedVar.shippingcountry,
            "transactionid": parsedVar.transactionid
              }
      }
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
      };
      
      axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + uID, JSON.stringify(data), axiosConfig)
      .then((res) => {
       return res;
      })
      .catch((err) => {
       return err;
      })
}

export default validateJWT
