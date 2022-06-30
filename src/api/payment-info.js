import jwt from 'jsonwebtoken'

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const validateJWT = async (req, res) => {
//validates JWT and gets user ID from payload data. then passes to the next function to get customerID and paymentID from stripe.
    try {
            const paymentMethod = await getPaymentMethod(req.body);

            let ex = {
              brand: paymentMethod.card.brand,
              month: paymentMethod.card.exp_month,
              year: paymentMethod.card.exp_year,
              last: paymentMethod.card.last4,
            }
            return res.status(200).json({ex})
        
      } catch (e) {
        res.json({body: 'error ' + e})
      } 
}



  async function getPaymentMethod(pm) {
    if (pm ==''){
      return '';
    } else {
      const paymentMethod =  await stripe.paymentMethods.retrieve(
        pm
      );
      return paymentMethod;
    }
  
  }

export default validateJWT
