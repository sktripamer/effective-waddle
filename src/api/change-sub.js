import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET);
import jwt from 'jsonwebtoken';
let params;


const getIntent = async (req, res) => {
    params = JSON.parse(req.body);
    const paymentIntent = await createIntent(params.sub, params.pid);
    return res.status(200).json({paymentIntent});

}




const createIntent = async (subID, methodID) => {

    try {
        const subscription = await stripe.subscriptions.update(
            subID,
            {default_payment_method: methodID}
          );
     
      return subscription;
    } catch (error) {
        return error;
    }  
}

export default getIntent;
