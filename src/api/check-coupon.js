import axios from 'axios'
let params;
const checkCoupon = async (req, res) => {
    params = JSON.parse(req.body);
    //params.code, params.cart
   // return  res.status(200).json(params.code)
    const safeCode = params.code.replace(/[^a-zA-Z0-9]/g, "");
   // return res.status(200).json(safeCode)
    if (safeCode == '') return res.status(400)
    console.log('here')
    const couponInfo = await getCoupon(safeCode)
    console.log(couponInfo)
    await res.status(200).json({couponInfo})
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
        return resp;
      })
      .catch((err) => {
          return err;
         })
      return responser;
}

export default checkCoupon;
