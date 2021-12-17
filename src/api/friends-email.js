export default async function handler(req, res) {
    try {
const emails = req.body.split('@@')

    const bodied ={
        "acf": {
            "email1": emails[0],
            "email2": emails[1],
            "email3": emails[2],
              }
      } 
      


    const modify = await  fetch('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + emails[3], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': "Basic YWRtaW46YWZhOSBvNTJSIG9uNWsgUVdHTCA4M0dMIHVlR3I=",
        },
         body: JSON.stringify(bodied),
      
      })
      const customer = (await modify.json());
   return res.status(200).json({customer})
    } catch (e) {
        return res.status(500).json({e})
    }

}
