import axios from 'axios'
let params;
const verifyUser = async (req, res) => {
    params = JSON.parse(req.body);
    const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=verify_code&useremail=' + params.e + '&code=' + params.c).then(resp => {    
        return resp.data;
    });
    return res.status(200).json({exists})

}

export default verifyUser
