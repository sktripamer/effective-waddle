
import jwt from 'jsonwebtoken'
import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET);

let params;
const validateJWT = async (req, res) => {
    params = JSON.parse(req.body)
    //validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
        try {
                jwt.verify(params.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
                  if (params.product === 1735) {
                    //entrepreneurial espresso sub
                    
                    let cool = await getCustomerID(decoded.data.user.id);
                    if (cool.acf.customer_id === undefined || cool.acf.customer_id === '') {
                      console.log('herea')
                      return res.status(200).json(false);
                    } 
                    const paymentMethod = await getPaymentMethods(cool.acf.customer_id);
                    if (paymentMethod.data.length === 0) {
                      console.log('hereb')
                      return res.status(200).json(false);
                    } 
                    let found = false;
                    paymentMethod.data.forEach((sub, index) => {
                      if (sub.plan.id === 'price_1LFzPWEIi9OXKxaBADloi95c' && sub.plan.id === true){
                          found = true;
                          console.log('found')
                      } else {
                       
                      }
                  })
                   if (found === true) {
                    let customerID = await getContent(params.post);
                    return res.status(200).json({customerID})
                   } else {
                    console.log('herec')
                    return res.status(200).json(false);
                   }
                     
                    
                  
                  }
             
           });
          } catch (e) {
            res.json({body: 'error ' + e})
          } 
    }


const getCustomerID = async (uID) => {
  let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ` + process.env.REST_SECRET,
      }
    };
   const responser = await axios.get('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + uID, axiosConfig).then(resp => {    
     return resp.data;
  });
  return responser;
}
const getContent = async(postID) => {
  const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=get_content&product_id=' + postID).then(resp => {    
    return resp.data;
  });
  return exists;

}


async function getPaymentMethods(cID) {
  const paymentMethods = await stripe.subscriptions.list({
    customer: cID
  });
  return paymentMethods;
}

export default validateJWT
