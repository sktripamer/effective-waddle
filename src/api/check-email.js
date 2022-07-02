import axios from 'axios'
import jwt from 'jsonwebtoken'
let params;
const validateJWT = async (req, res) => {
    //validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
    params = JSON.parse(req.body)
        try {
                jwt.verify(params.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
                    const exists =  await verifyUser(decoded.data.user.user_email, params.new, params.code);
                    console.log(exists)
                    if (exists.message === true) {
                        console.log('wehere')
                        var newJWT = jwt.sign({  data: {
                            user: {
                              id: decoded.data.user.id,
                              user_email:params.new
                            }
                          } }, process.env.JWT_SECRET);
                          res.status(200).json({message: newJWT})
                    } else {
                        res.status(200).json({message: false})
                    }
                
             
           });
          } catch (e) {
            res.json({body: 'error ' + e})
          } 
    }

const verifyUser = async (uID, newemail, code) => {
    console.log('aa')
    console.log(uID, newemail, code)
    const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=verify_mail&useremail=' + uID + '&newemail=' + newemail + '&code=' + code).then(resp => {    
        return resp.data;
    });
    return exists;

}


export default validateJWT
