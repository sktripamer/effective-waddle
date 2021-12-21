import fetch from "node-fetch"
import jwt from 'jsonwebtoken'
const saveFriends = async (req, res) => {
   // const emails = req.body.split('@@')
    
  // POST data to an authenticated API
 // try { 
  //  const decoded = jwt.verify('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcG9ydGFsLnJldnJldmRldi54eXoiLCJpYXQiOjE2NDAwNTEwOTEsIm5iZiI6MTY0MDA1MTA5MSwiZXhwIjoxNjQwMDUxMzkxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIzNSJ9fX0.2pmJC8LqI8omzsDSeePGnkzuAc4i4igheL6flsJcrG4', 'sAd}aBA(Lm{&Z))WK|whV|nBU=zf6J^hshgMMfkU;Hmc Ky/5mRx2G^4/LsE-q`|',{ ignoreExpiration: true});
    
  const url = 'https://portal.revrevdev.xyz/wp-json/wp/v2/users/35'// + decoded.data.user.id
  
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic YWRtaW46YWZhOSBvNTJSIG9uNWsgUVdHTCA4M0dMIHVlR3I=`,
  }
  
  const data = {
    "acf": {
        "email1": 'test123@gmail.com',
        "email2": 'test123@gmail.com',
        "email3": 'test123@gmail.com',
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
  // }
  // catch (ex) {   res.status(500).send(ex.message); }
   

}

export default saveFriends
