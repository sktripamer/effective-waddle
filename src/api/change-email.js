import axios from 'axios'
import jwt from 'jsonwebtoken'

const validateJWT = async (req, res) => {
    //validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
    params = JSON.parse(req.body)
        try {
                jwt.verify(params.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
                    const exists =  await verifyUser(decoded.data.user.user_email);
    
                return res.status(200).json({exists})
             
           });
          } catch (e) {
            res.json({body: 'error ' + e})
          } 
    }

const verifyUser = (uID) => {

    const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=change_mail&useremail=' + uID).then(resp => {    
        return resp.data;
    });
    return res.status(200).json({exists})

}


export default validateJWT
