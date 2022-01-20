import axios from 'axios'


const createCustomer = async (req, res) => {

    try {
        const emails = req.body.split('@@')
      // get payment method
        
      const data = 'email=' + encodeURIComponent(emails[0]) + '&sms_number=' + encodeURIComponent(emails[1]);
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Api-Key': process.env.OP_APIKEY,
            'Api-Appid': process.env.OP_APPID,
        }
      };
      
      axios.post('https://api.ontraport.com/1/Contacts', data, axiosConfig)
      return res.status(200);
     //return customerID;
  
    } catch (error) {
      return error;
    }
    
  }

export default createCustomer
