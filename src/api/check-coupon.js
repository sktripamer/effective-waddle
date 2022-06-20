import axios from 'axios'
let params;
const checkCoupon = async (req, res) => {
    params = JSON.parse(req.body);
    //params.code, params.cart
    const safeCode = params.code.replace(/[^a-zA-Z0-9]/g, "");
    if (safeCode == '') return res.status(400)
    const couponInfo = await getCoupon(safeCode)
    return res.status(200).json({couponInfo})
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
        return resp;
      })
      .catch((err) => {
          return err;
         })
      return responser;
}

export default checkCoupon;
