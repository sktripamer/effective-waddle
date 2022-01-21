import axios from 'axios'


const createCustomer = async (req, res) => {

    try {
        const emails = req.body.split('@@')
      // get payment method
        
      const data = 'email=' + encodeURIComponent(emails[0]) + '&sms_number=' + encodeURIComponent(emails[1]);
      const ontraID = await ontraCreate(data);  
     // return res.status(200).json('good');
     //return customerID;
     return await res.status(200).json(ontraID);
    } catch (error) {
      return error;
    }
    
  }

  const ontraCreate = async (sendData) => {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Api-Key': process.env.OP_APIKEY,
            'Api-Appid': process.env.OP_APPID,
        }
      };
      
      axios.post('https://api.ontraport.com/1/Contacts', sendData, axiosConfig)
      .then((res) => {
       return res;
       })
       .catch((err) => {
        return err;
       })

  }

  

export default createCustomer
