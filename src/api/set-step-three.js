import jwt from 'jsonwebtoken'
import axios from 'axios'

const validateJWT = async (req, res) => {
//validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
    try {
            jwt.verify(req.body, process.env.JWT_SECRET,{ ignoreExpiration: true}, async function(err, decoded) {
            const customerID = await getPaymentID(decoded.data.user.id);
           // const paymentMethod = await getPaymentMethod(customerID);
            //const paymentIntent = await createIntent(customerID, decoded.data.user.id);
             
         // return res.status(200).json(decoded.data.user.id);
          return res.status(200).json({customerID})
       });
      } catch (e) {
        res.json({body: 'error ' + e})
      } 
}


const getPaymentID = async (uID) => {

    const data = {
        "acf": {
            "socialshare": true,
              }
      }
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
      };
      
      axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + uID, JSON.stringify(data), axiosConfig)
      .then((res) => {
       return res;
      })
      .catch((err) => {
       return err;
      })
}

export default validateJWT
