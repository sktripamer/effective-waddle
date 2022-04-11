import jwt from 'jsonwebtoken'
import axios from 'axios'
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const validateJWT = async (req, res) => {
//validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
    try {
            jwt.verify(req.body, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
            const customerID = await getCustomerID(decoded.data.user.id);
            return res.status(200).json({customerID})
         
       });
      } catch (e) {
        res.json({body: 'error ' + e})
      } 
}


const getCustomerID = async (uID) => {

    const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=get_progress&course_id=143434&user_id=' + uID).then(resp => {    
      return resp.data;
  });
  return exists;

  
}



export default validateJWT
