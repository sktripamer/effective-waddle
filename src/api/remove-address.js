import jwt from 'jsonwebtoken'
import axios from 'axios'
let params;

const validateJWT = async (req, res) => {
//validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
params = JSON.parse(req.body)
    try {
            jwt.verify(params.token, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
            await saveUser(decoded.data.user.id);

            return res.status(200).json(true)
         
       });
      } catch (e) {
        res.json({body: 'error ' + e})
      } 
}


  const saveUser = async(userID) => {
    let data = {
      "acf": {
          
            }
    }

     if(params.previousShippingData === '' || params.previousShippingData === undefined) {
      data.acf['shippingaddress1'] = ''
     } else {
      data.acf['shippingaddress1'] = JSON.stringify(params.previousShippingData)
     }
        
          
        
   
    



      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
      };
      
      const responser = await axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + userID, JSON.stringify(data), axiosConfig)
      .then((res) => {
      return res;
      })
      .catch((err) => {
      return err;
      })
      return responser;
}


export default validateJWT
