import fetch from "node-fetch"
import jwt from 'jsonwebtoken'
import axios from 'axios'

function validateEmail(email) 
    {
        var re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

const saveFriends = async (req, res) => {
//    const emails = req.body.split('@@')
    
//   POST data to an authenticated API
//  try { 
//    const decoded = jwt.verify('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcG9ydGFsLnJldnJldmRldi54eXoiLCJpYXQiOjE2NDAwNTEwOTEsIm5iZiI6MTY0MDA1MTA5MSwiZXhwIjoxNjQwMDUxMzkxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIzNSJ9fX0.2pmJC8LqI8omzsDSeePGnkzuAc4i4igheL6flsJcrG4', 'sAd}aBA(Lm{&Z))WK|whV|nBU=zf6J^hshgMMfkU;Hmc Ky/5mRx2G^4/LsE-q`|',{ ignoreExpiration: true});
    
//   const url = 'https://portal.revrevdev.xyz/wp-json/wp/v2/users/35'// + decoded.data.user.id
  
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Basic YWRtaW46YWZhOSBvNTJSIG9uNWsgUVdHTCA4M0dMIHVlR3I=`,
//   }
  
//   const data = {
//     "acf": {
//         "email1": 'test123@gmail.com',
//         "email2": 'test123@gmail.com',
//         "email3": 'test123@gmail.com',
//           }
//   }
//   try {
//     const result = await fetch(url, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(data),
//     }).then(res => {
//       return res.json()
//     })
//     res.json(result)
//   } catch (error) {
//     res.status(500).send(error)
//   }
//   // }
//   // catch (ex) {   res.status(500).send(ex.message); }

try {
    const customerID = await getCustomer(req.body);

    res.status(200).json({customerID})
  } catch (e) {
    res.json({body: 'error ' + e})
  }

}

async function getCustomer(token) {
  const emails = token.split('@@')
  if (!validateEmail(emails[0])) {
    emails[0] = '';
  }
  if (!validateEmail(emails[1])) {
    emails[1] = '';
  }
  if (!validateEmail(emails[2])) {
    emails[2] = '';
  }
    const data = {
        "acf": {
            "email1": emails[0],
            "email2": emails[1],
            "email3": emails[2],
              }
      }
    let decoded;  
       try { 
        decoded = jwt.verify(emails[3], process.env.JWT_SECRET,{ ignoreExpiration: true});
       }  catch (ex) {   return ex; }
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.REST_SECRET,
        }
      };
      
      axios.post('https://portal.revrevdev.xyz/wp-json/wp/v2/users/' + decoded.data.user.id, JSON.stringify(data), axiosConfig)
      .then((res) => {
       return res;
      })
      .catch((err) => {
       return err;
      })
    }

export default saveFriends


