
import jwt from 'jsonwebtoken'
import axios from 'axios'


let params;
const validateJWT = async (req, res) => {
    params = JSON.parse(req.body)
    //validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
        try {
                jwt.verify(params.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
                const customerID = await addCourse(decoded.data.user.id, params.product);
                return res.status(200).json({customerID})
             
           });
          } catch (e) {
            res.json({body: 'error ' + e})
          } 
    }

const addCourse = async(customerID, productID) => {
    const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=has_bought&product_id=' + productID + '&user_id=' + customerID).then(resp => {    
      return resp.data;
    });
    return exists;

}

export default validateJWT
