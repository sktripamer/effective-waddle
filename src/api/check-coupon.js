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
   const couponInfo = await getCoupon(safeCode)
   if (couponInfo.length === 1) {
    if (couponInfo[0].discount_type === 'fixed_product' && couponInfo[0].limit_usage_to_x_items === 1) {
        //fixed product discount and only applies once
        cartIndex = -1;
        couponInfo[0].product_ids.forEach((couponProduct, index) => {
            params.cart.forEach((cartProduct, index2) => {
              if (couponProduct === cartProduct.ID) cartIndex = index2;
            })
        })
        if (cartIndex >= 0) {
            //coupon is valid and in the users cart
            let newprice = params.cart[cartIndex].price - parseFloat(coupon.couponInfo[0].amount);
            params.cart[cartIndex].price = newprice;
            params.cart[cartIndex].code = couponInfo[0].code;
            let newCart =  params.cart
            return res.status(200).json({success: true, newCart})
        }
        
    }
    //more cases here
    return res.status(200).json({success: false}) //coupon is valid, but no matching cases
   }
   return res.status(200).json({success: false}) //coupon not valid
}

// const getCoupon = async (code) => {
//     let axiosConfig = {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Basic ` + process.env.WC_SECRET,
//         }
//     };
//       const responser = await axios.get('https://portal.revrevdev.xyz/wp-json/wc/v3/coupons/?code=' + code, axiosConfig)
//       .then(resp => {  
//           console.log(resp)
//          return resp.text()
//       })
//       .catch((err) => {
//           return err;
//          })
//       return responser;
// }
const getCoupon = async(code) => {
    console.log('hererr')
    const exists = await axios.get('https://portal.revrevdev.xyz/wp-json/wc/v3/coupons/?code=' + code, {headers: { Authorization: `Basic ` + process.env.WC_SECRET}}).then(resp => {    
      return resp.data;
  });
  return exists;

  }
export default checkCoupon;
