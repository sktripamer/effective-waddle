import axios from 'axios'

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
  }
  return result;
  }

const verifyUser = async (req, res) => {



    const exists = await axios.get('https://portal.revrevdev.xyz/?better_ld_api=d74dd1094863071982578684bc13be64&better_ld_api_method=verify_account&useremail=' + req.body + '&userpass=' + makeid(48) + '&code=' + req.body.replace(/[^a-zA-Z0-9]/g, '') + makeid(5)).then(resp => {    
        return resp.data;
    });
    return res.status(200).json({exists})

}


export default verifyUser
