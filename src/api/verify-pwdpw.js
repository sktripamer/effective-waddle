import axios from 'axios'
import jwt from 'jsonwebtoken'
let params;
const verifyUser = async (req, res) => {
    params = JSON.parse(req.body);
    const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=verify_pwdpw&useremail=' + params.e + '&code=' + params.c + '&userpass=' + params.p).then(resp => {    
        return resp.data;
    });

    if (exists.message > 0) {
        //password has been updated, create jwt now.
        let newJWT = jwt.sign({  data: {
            user: {
              id: exists.message,
              user_email: params.e
            }
          } }, process.env.JWT_SECRET);
        let email = params.e;
        return res.status(200).json({exists, newJWT, email})
    }
    return res.status(200).json({exists})

}

export default verifyUser
