import axios from 'axios';
import fetch from 'node-fetch';

let params;
const checkCoupon = async (req, res) => {
    params = JSON.parse(req.body);
    //params.code, params.cart
   // return  res.status(200).json(params.code)
    const safeCode = params.code.replace(/[^a-zA-Z0-9]/g, "");
   // return res.status(200).json(safeCode)
    if (safeCode == '') return res.status(400)
    console.log('here')
   // const couponInfo = await getCoupon(safeCode)
   // console.log(couponInfo)
   let aaa;
!async function(){
let data = await fetch('https://portal.revrevdev.xyz/wp-json/wc/v3/coupons/?code=' + safeCode, {
    headers: {
        'Authorization':  `Basic ` + process.env.WC_SECRET
    }
})
    .then((response) => {
        console.log('hererr')
        console.log(response.text())
        return response.text()})
    .catch(error => {
        console.error(error);
    });

aaa = JSON.parse(data)
}();
  await res.status(200).json({aaa})
}

const getCoupon = async (code) => {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ` + process.env.WC_SECRET,
        }
    };
      const responser = await axios.get('https://portal.revrevdev.xyz/wp-json/wc/v3/coupons/?code=' + code, axiosConfig)
      .then(resp => {  
          console.log(resp)
         return resp.text()
      })
      .catch((err) => {
          return err;
         })
      return responser;
}

export default checkCoupon;
