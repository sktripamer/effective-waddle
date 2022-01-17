// const stripe = require("stripe")(process.env.STRIPE_SECRET);
// import fetch from 'node-fetch'
//  export default async function handler(req, res) {
// //const { amount, currency = "usd" } = JSON.parse(body);

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getMail = async (req, res) => {
//const { amount, currency = "usd" } = JSON.parse(body);

try {
        //return decoded.data.user.user_email;
        //res.status(200).json(decoded.data.user.user_email)
         const paymentIntent = await createIntent(req.body);
        await res.status(200).json({body:paymentIntent});


} catch (e) {
  res.json({body: 'error ' + e})
}

};



const createIntent = async (cID) => {

    try {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 5000,
        currency: 'usd',
        customer: cID,
        setup_future_usage: "on_session",
      });
     
      return paymentIntent;
    } catch (error) {
        return error;
    }
    
  }
  
export default getMail

    
