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

    const customerID = await getPaymentID();
   // const paymentMethod = await getPaymentMethod(customerID);
    //const paymentIntent = await createIntent(customerID, decoded.data.user.id);
     
 // return res.status(200).json(decoded.data.user.id);
  return res.status(200).json({customerID})


} else {
  return res.status(400);
}

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
const getPaymentID = async () => {

    const data = {
        'username': parsedVar.accountemail.replace(/[^a-zA-Z0-9]/g, ''),
        'email': parsedVar.accountemail,
        'password': makeid(48),
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
      
      axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users', JSON.stringify(data), axiosConfig)
      .then((res) => {
       return res;
      })
      .catch((err) => {
       return err;
      })
}

export default validateJWT
