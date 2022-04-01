import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET)
import jwt from 'jsonwebtoken'
let params;
let paymentIntent;
const verifyIntent = async (req, res) => {
    params = JSON.parse(req.body)

    //if new account is null and so is authtoken, return error and end immediately
    if (params.newAccount === null && params.token === null) {return res.status(400)};

    //if new account is not null, and authtoken is not null, return error (and try to clearn authtoken?).
    if (params.newAccount !== null && params.token !== null) {return res.status(400)};

    if (params.intent == null) return res.status(400); //no payment intent included in check, exit.
    paymentIntent = await stripe.paymentIntents.retrieve(params.intent);

    if (JSON.stringify(params.cart) !== paymentIntent.metadata.cart) return res.status(400); // cart from intent and verifier mismatch, exit.
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
    if (totalCartPrice != paymentIntent.amount) return res.status(400); //intent and cart checker price mismatch.
    if (paymentIntent.status !== "succeeded") return res.status(400); //not successfull transaction

    //if new account is not null, and authtoken is null, try to process new account.
    if (params.newAccount !== null && params.token === null) {
        const newUser = await createNewUser(params.newAccount);
        return res.status(200).json({newUser})
        // still need to create woo order
    }

    //if new account is null, and authtoken is not null, try to process authtoken.
    if (params.newAccount === null && params.token !== null) {
        try {
            jwt.verify(params.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
                const savedUser = await saveUser(decoded.data.user.id); //saves acf data
               
                 return res.status(200).json({savedUser})
                // still need to create woo order
              });
            } catch (e) {
                return res.status(401); //jwt not valid
              }
    }

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

  const createNewUser = async (newEmail) => {

    let data = {
        'username': newEmail.replace(/[^a-zA-Z0-9]/g, ''),
        'email': newEmail,
        'password': makeid(48),
        "acf": {
            "customer_id": paymentIntent.customer,
              }
      }

      
      if (params.metafield !== null) {
        data.acf[params.metafield] = params.metavalue
      }

      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
      };
      
      const responser = await axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users', JSON.stringify(data), axiosConfig)
      .then((resp) => {
        const newjwt = await jwt.sign({  data: {
            user: {
              id: resp.data.id,
              user_email: resp.data.email
            }
          } }, process.env.JWT_SECRET, function(err, token) {
            return token
          });
       return newjwt
      })
      .catch((err) => {
       return err;
      })
      return responser;
}

const saveUser = async(userID) => {
    let data = {
        "acf": {
            "customer_id": paymentIntent.customer,
              }
      }
      if (params.metafield !== null) {
        data.acf[params.metafield] = params.metavalue
      }

      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
      };
      
      axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + userID, JSON.stringify(data), axiosConfig)
      .then((res) => {
       return res;
      })
      .catch((err) => {
       return err;
      })

}

export default verifyIntent;
