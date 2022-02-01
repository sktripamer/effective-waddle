// const stripe = require("stripe")(process.env.STRIPE_SECRET);
import jwt from 'jsonwebtoken'
import axios from 'axios'
// import fetch from 'node-fetch'
//  export default async function handler(req, res) {
// //const { amount, currency = "usd" } = JSON.parse(body);

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getMail = async (req, res) => {
//const { amount, currency = "usd" } = JSON.parse(body);

try {
 
    jwt.verify(req.body, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
        //return decoded.data.user.user_email;
        //res.status(200).json(decoded.data.user.user_email)
         const customerID = await createCustomer(decoded.data.user.user_email, decoded.data.user.id);
         const paymentIntent = await createIntent(customerID, decoded.data.user.id);
         
        await res.status(200).json({body:paymentIntent});
          
      });
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 500,
//     currency: 'usd', 
//     customer: customerID,
//     setup_future_usage: "on_session",
//   });

  //res.status(200).json({body:customerID})
} catch (e) {
  res.json({body: 'error ' + e})
}

};
// const setCustomer = async (token) => {
//          let axiosConfig = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Basic ` + process.env.REST_SECRET,
//             }
//           };
          
//           axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/45', axiosConfig)
//           .then((response =>  {
         
//                 response.json()
            
//             .then(response => response.json())
//             .then(data => console.log(data));
//             //   if (res.acf.customer_id == '') {
//             //       //create new customer
//             //   } else {
//             //       //send customer_id
//             //   }
//               return res.user_email;
//           })
// }
async function setCustomer(uID, cID) {


      const data = {
          "acf": {
              "customer_id": cID,
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


// const getCustomer = async (token) => {
//     const emails = token.split('@@')
//     jwt.verify(emails[1], process.env.JWT_SECRET,{ ignoreExpiration: true}, function(err, decoded) {
//         return decoded.data.user.user_email;
//       });
//       }

const createCustomer = async (emailSend, uID) => {

  try {
    // Create a new customer
    const customerID = await stripe.customers.create({
      email: emailSend
    });
    
    return customerID.id;

  } catch (error) {
    return error;
  }
  
}


const createIntent = async (cID, uID) => {
    const data = {
        "acf": {
            "customer_id": cID,
              }
      }
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
      };
      
      axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + uID, JSON.stringify(data), axiosConfig)
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
