const stripe = require("stripe")(process.env.STRIPE_SECRET);
let params;


const getIntent = async (req, res) => {
    params = JSON.parse(req.body);
    const paymentIntent = await createIntent(params.sub);
    return res.status(200).json({paymentIntent});

}




const createIntent = async (subID) => {

    try {
        const subscription = await stripe.subscriptions.update(
            subID,
            {cancel_at_period_end: true}
          );
     
      return subscription;
    } catch (error) {
        return error;
    }  
}

export default getIntent;
