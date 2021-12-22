const stripe = require("stripe")(process.env.STRIPE_SECRET);
import jwt from 'jsonwebtoken'
import axios from 'axios'
 export default async function handler(req, res) {
//const { amount, currency = "usd" } = JSON.parse(body);

try {

  //const emails = req.body.split('@@')
  const getEmailID =   await getEmail(req.body);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 500,
    currency: 'usd',
    customer: getEmailID,
    setup_future_usage: "on_session",
  });

  res.status(200).json({body:paymentIntent})
} catch (e) {
  res.json({body: 'error ' + e})
}

}

async function getCustomer(emailSend) {
  // if (!event.body) {
  //   res.json({body: 'error invalid body'})
  // }
  // const body = JSON.parse(event.body);
  // const { email } = body;
  
  // if (!email) {
  //   res.json({body: 'error no email'})
  //   return;
  // }

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
  
async function getEmail(token) {
    const emails = token.split('@@')
      let decoded;  
         try { 
          decoded = jwt.verify(emails[1], process.env.JWT_SECRET,{ ignoreExpiration: true});
         }  catch (ex) {   return ex; }
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ` + process.env.REST_SECRET,
          }
        };
        
        axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + decoded.data.user.id, axiosConfig)
        .then((res) => {
         if (res.user_email == emails[0]) {
             //getCustomerREST
             if (res.acf.customer_id == '') {
                //create_new_customer
                const customerID = await getCustomer(res.user_email);
                saveCustomer(customerID + '@@' + decoded.data.user.id);
                return customerID;
            } else {
                //return res.customer_id
                return res.acf.customer_id;
            }
             return customerID;
         } else {
             //update user email
             if (res.acf.customer_id == '') {
                //create_new_customer
                const customerID = await getCustomer( emails[0]);
                saveCustomer(customerID + '@@' + decoded.data.user.id);
                return customerID;
            } else {
                //return res.customer_id
                return res.acf.customer_id;
            }
         }
        })
        .catch((err) => {
         return err;
        })
}


// async function getCustomerREST(userID) {
        
//         let axiosConfig = {
//           headers: {
//               'Content-Type': 'application/json',
//               Authorization: `Basic ` + process.env.REST_SECRET,
//           }
//         };
        
//         axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + userID, axiosConfig)
//         .then((res) => {
//          if (res.acf.customer_id == '') {
//              //create_new_customer
//              const customerID = await getCustomer(res.user_email);
//              return customerID;
//          } else {
//              //return res.customer_id
//              return res.acf.customer_id;
//          }
//         })
//         .catch((err) => {
//          return err;
//         })
// }


async function saveCustomer(token) {
    const emails = token.split('@@')
      const data = {
          "acf": {
              "customer_id": emails[0],
                }
        }

        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ` + process.env.REST_SECRET,
          }
        };
        
        axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + emails[1], JSON.stringify(data), axiosConfig)
        .then((res) => {
         return res;
        })
        .catch((err) => {
         return err;
        })
      }
