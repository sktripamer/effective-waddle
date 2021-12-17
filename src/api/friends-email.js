export default async function handler(req, res) {
const emails = req.body.split('@@')

    const bodied ={
        "acf": {
            "email1": emails[0],
            "email2": emails[1],
            "email3": emails[2],
              }
      } 
      


    const request = await  fetch('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + emails[3], {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': "Basic YWRtaW46YWZhOSBvNTJSIG9uNWsgUVdHTCA4M0dMIHVlR3I=",
        }),
         body: JSON.stringify(bodied),
      
      })
   const intent2 = (await request.json());
res.status(200)


}
