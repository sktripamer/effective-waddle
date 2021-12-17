export default async function handler(req, res) {
    try {
const emails = req.body.split('@@')


      
const custobj = await getCustomerObj(emails[0],emails[1],emails[2],emails[3]);

   return res.status(200).json({custobj})
    } catch (e) {
        return res.status(500).json({e})
    }

}


async function getCustomerObj(email1, email2, email3, id) {
    try {

        const bodied ={
            "acf": {
                "email1": emails[0],
                "email2": emails[1],
                "email3": emails[2],
                  }
          } 
      // Retrieve email and username of the currently logged in user.
      // getUserFromDB() is *your* implemention of getting user info from the DB

      const request = await fetch('https://portal.revrevdev.xyz/wp-json/wp/v2/users/26', {
        method: 'POST',
        headers: {
            'Authorization': "Basic YWRtaW46YWZhOSBvNTJSIG9uNWsgUVdHTCA4M0dMIHVlR3I="
          },
          body:'{"acf":{"email1":"sktripamer2@gmail.com","email2":"sktripamer2@gmail.com","email3":"sktripamer2@gmail.com"}}',
      });
      const customerobj = (await request.json());
      // Update your user in DB to store the customerID
      // updateUserInDB() is *your* implementation of updating a user in the DB
      return customerobj;
    } catch (error) {

      return error;
    }
  }
