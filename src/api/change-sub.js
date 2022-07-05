const stripe = require("stripe")(process.env.STRIPE_SECRET);
let params;


const getIntent = async (req, res) => {
    params = JSON.parse(req.body);
    const paymentIntent = await createIntent(params.sub, params.pid, params.canceled);
    return res.status(200).json({paymentIntent});

}




const createIntent = async (subID, methodID, cancel) => {

    try {
        const subscription = await stripe.subscriptions.update(
            subID,
            {default_payment_method: methodID},
            {cancel_at_period_end: !cancel}
          );
     
      return subscription;
    } catch (error) {
        return error;
    }  
}

export default getIntent;
