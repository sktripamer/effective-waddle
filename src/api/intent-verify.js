import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET)
import jwt from 'jsonwebtoken'
let params

const verifyIntent = async (req, res) => {
    params = JSON.parse(req.body)

    if (params.intent == null) return res.status(400); //no payment intent included in check, exit.
    if (JSON.stringify(params.cart) !== params.intent.paymentIntent.metadata.cart) return res.status(400); // cart from intent and verifier mismatch, exit.
    let total = 0;
    const mapLoop = async _ => {
        const promises = params.cart.map(async pID => {
            const priceOfProduct = await getPrice(pID)
            total += parseInt(priceOfProduct)
            return priceOfProduct
        })
        const totalPrice = await Promise.all(promises)
        return total;
    }
    const totalCartPrice = await mapLoop();
    if (totalCartPrice != params.intent.paymentIntent.amount) return res.status(400); //intent and cart checker price mismatch.
    if (params.intent.paymentIntent.status !== "succeeded") return res.status(400); //not successfull transaction
    return res.status(200).json(true)
}





const getPrice = async (pID) => {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.WC_SECRET,
        }
    };
      const responser = await axios.get('https://portal.revrevdev.xyz/wp-json/wc/v3/products/' + pID, axiosConfig)
      .then(resp => {  
        if (resp.data.price.includes('.')) {
            return resp.price.replace(/\./g, '');
        } else {
          return resp.data.price + '00';
        }
      })
      .catch((err) => {
          return err;
         })
      return responser;
}

export default verifyIntent;
