// const stripe = require("stripe")(process.env.STRIPE_SECRET);
import jwt from 'jsonwebtoken'
// import axios from 'axios'
// import fetch from 'node-fetch'
//  export default async function handler(req, res) {
// //const { amount, currency = "usd" } = JSON.parse(body);

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getMail = async (req, res) => {
//const { amount, currency = "usd" } = JSON.parse(body);

try {
    const emails = req.body.split('@@')
    jwt.verify(emails[1], process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
        //return decoded.data.user.user_email;
        //res.status(200).json(decoded.data.user.user_email)
         const customerID = await createCustomer(decoded.data.user.user_email);
         const paymentIntent = await stripe.paymentIntents.create({
            amount: 500,
            currency: 'usd',
            customer: await customerID,
            setup_future_usage: "on_session",
          });
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
const getCustomer = async (token) => {
    const emails = token.split('@@')
    jwt.verify(emails[1], process.env.JWT_SECRET,{ ignoreExpiration: true}, function(err, decoded) {
        return decoded.data.user.user_email;
      });
      }

      const createCustomer = async (emailSend) => {

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
  
export default getMail

// try {

//   //const emails = req.body.split('@@')
//   const getEmailID =   await getEmail(req.body);
// //   const getCustomerID = await getCustomer(getEmailID)
// //   const paymentIntent = await stripe.paymentIntents.create({
// //     amount: 500,
// //     currency: 'usd',
// //     customer: getCustomerID,
// //     setup_future_usage: "on_session",
// //   });

//   res.status(200).json({body:getEmailID})
// } catch (e) {
//   res.json({body: 'error ' + e})
// }

// }

// async function getCustomer(emailSend) {
//   // if (!event.body) {
//   //   res.json({body: 'error invalid body'})
//   // }
//   // const body = JSON.parse(event.body);
//   // const { email } = body;
  
//   // if (!email) {
//   //   res.json({body: 'error no email'})
//   //   return;
//   // }

//   try {
//     // Create a new customer
//     const customerID = await stripe.customers.create({
//       email: emailSend
//     });
//    return customerID.id;

//   } catch (error) {
//     return error;
//   }
  
// }

// async function getEmail(token) {
//     //const emails = token.split('@@')

//     //   let decoded;  
//     //      try { 
//     //       decoded = jwt.verify(emails[3], process.env.JWT_SECRET,{ ignoreExpiration: true});
//     //      }  catch (ex) {   return ex; }
    
//     const url = 'https://portal.revrevdev.xyz/wp-json/wp/v2/users/45'
  
//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Basic ` + process.env.REST_SECRET,
//     }
//     try {
//        await fetch(url, {
//           method: "GET",
//           headers: headers,
//         })  .then(response => response.json())
//       .then(data => {
//           return data.user_email;
//       });
//       } catch (error) {
//         res.status(500).send(error)
//       }
//       }
  
// // async function getEmail(token) {
// //     // const emails = token.split('@@')
// //     //   let decoded;  
// //     //      try { 
// //     //       decoded = jwt.verify(emails[1], process.env.JWT_SECRET,{ ignoreExpiration: true});
         
// //     //      }  catch (ex) {   return ex; }

//          const url = 'https://portal.revrevdev.xyz/wp-json/wp/v2/users/45'
  
//          const headers = {
//            "Content-Type": "application/json",
//            Authorization: `Basic ` + process.env.REST_SECRET,
//          }
         
       

// // return "hey";
// // }

//         //  let axiosConfig = {
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //         Authorization: `Basic ` + process.env.REST_SECRET,
//         //     }
//         //   };
          
//         //   axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/45', axiosConfig)
//         //   .then((response =>  {
         
//         //         response.json()
            
//         //     .then(response => response.json())
//         //     .then(data => console.log(data));
//         //     //   if (res.acf.customer_id == '') {
//         //     //       //create new customer
//         //     //   } else {
//         //     //       //send customer_id
//         //     //   }
//         //       return res.user_email;
//         //   })
// // async function getCustomerREST(userID) {
        
// //         let axiosConfig = {
// //           headers: {
// //               'Content-Type': 'application/json',
// //               Authorization: `Basic ` + process.env.REST_SECRET,
// //           }
// //         };
        
// //         axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + userID, axiosConfig)
// //         .then((res) => {
// //          if (res.acf.customer_id == '') {
// //              //create_new_customer
// //              const customerID = await getCustomer(res.user_email);
// //              return customerID;
// //          } else {
// //              //return res.customer_id
// //              return res.acf.customer_id;
// //          }
// //         })
// //         .catch((err) => {
// //          return err;
// //         })
// // }


// async function saveCustomer(token) {
//     const emails = token.split('@@')
//       const data = {
//           "acf": {
//               "customer_id": emails[0],
//                 }
//         }

//         let axiosConfig = {
//           headers: {
//               'Content-Type': 'application/json',
//               Authorization: `Basic ` + process.env.REST_SECRET,
//           }
//         };
        
//         axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + emails[1], JSON.stringify(data), axiosConfig)
//         .then((res) => {
//          return res;
//         })
//         .catch((err) => {
//          return err;
//         })
//       }


                  
//     //   if (res.user_email == emails[0]) {
//     //     //getCustomerREST
//     //     if (res.acf.customer_id == '') {
//     //        //create_new_customer

//     //        try {
//     //            // Create a new customer
//     //            const customerID = await stripe.customers.create({
//     //              email: emailSend
//     //            });
//     //           saveCustomer(customerID + '@@' + decoded.data.user.id);
//     //           return customerID.id;
           
//     //          } catch (error) {
//     //            return error;
//     //          }
//     //        //const customerID = getCustomer(res.user_email);

//     //    } else {
//     //        //return res.customer_id
//     //        return res.acf.customer_id;
//     //    }
       
//     // } else {
//     //     //update user email
//     //     if (res.acf.customer_id == '') {
//     //        //create_new_customer
//     //        try {
//     //            // Create a new customer
//     //            const customerID = await stripe.customers.create({
//     //              email: emailSend
//     //            });
//     //           saveCustomer(customerID + '@@' + decoded.data.user.id);
//     //           return customerID.id;
           
//     //          } catch (error) {
//     //            return error;
//     //          }
//     //    } else {
//     //        //return res.customer_id
//     //        return res.acf.customer_id;
//     //    }
//     // }



//     //
//     //


    
