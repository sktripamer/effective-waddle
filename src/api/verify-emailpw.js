import axios from 'axios'

const verifyUser = async (req, res) => {

    const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=verify_userpw&useremail=' + req.body).then(resp => {    
        return resp.data;
    });
    return res.status(200).json({exists})

}


export default verifyUser
