import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET);
import jwt from 'jsonwebtoken';
let params;


const getIntent = async (req, res) => {

    try {
        jwt.verify(req.body, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
             const customerID = await getCustomer(decoded.data.user.id); // tries to retrieve the ACF data (stripe customer ID) associated with the decoded JWT

                 //create an intent with the saved customer ID.
                const paymentIntent = await createIntent(customerID);
                return res.status(200).json({paymentIntent});

          });
        } catch (e) {
            return res.status(401); //jwt not valid
          }

}



const getCustomer = async (uID) => {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
    };
    const responser = await axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + uID, axiosConfig)
    .then(resp => {  
       return resp.data.acf.customer_id;
    })
    .catch((err) => {
        return err;
       })
    return responser;
}

const createIntent = async (cID) => {

    try {
    const paymentIntent = await stripe.setupIntents.create({
        customer: cID,
        setup_future_usage: "off_session",
      });
     
      return paymentIntent;
    } catch (error) {
        return error;
    }  
}

export default getIntent;
