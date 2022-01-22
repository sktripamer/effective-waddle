import axios from 'axios'

const userExists = async (req, res) => {

     const responser = await axios.get('https://portal.revrevdev.xyz/wp-json/tv5hoq1wzdbgy0y6y4s8krvqvp759kc03vu7snia/user-exists?email=' + encodeURIComponent(req.body)).then(resp => {    
       return resp;
    });
    return res.status(200).json(responser)
}

export default userExists;
