import fetch from "node-fetch"
import jwt from 'jsonwebtoken'
export default async function postNewPersonHandler(req, res) {
    const emails = req.body.split('@@')
    let decoded;
  // POST data to an authenticated API
  try {
    decoded = jwt.verify(emails[3], 'sAd}aBA(Lm{&Z))WK|whV|nBU=zf6J^hshgMMfkU;Hmc Ky/5mRx2G^4/LsE-q`|',{ ignoreExpiration: true});
   }
   catch (ex) {   res.status(500).send(ex.message); }
   

  const url = 'https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + decoded.data.user.id
  
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic YWRtaW46YWZhOSBvNTJSIG9uNWsgUVdHTCA4M0dMIHVlR3I=`,
  }
  
  const data = {
    "acf": {
        "email1": emails[0],
        "email2": emails[1],
        "email3": emails[2],
          }
  }
  try {
    const result = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    }).then(res => {
      return res.json()
    })
    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
}
