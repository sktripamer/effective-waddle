import React, { useState, useRef } from 'react';

export default function Checkout() {
const [loading, setLoading] = useState(false)
const couponForm = useRef(null);

const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const form = couponForm.current
    const couponCode = form['coupon'].value 

    let ex = {
        cart:{},
        code:couponCode
    }
    const request = await fetch('/api/check-coupon', {
        method: 'POST',
        body: JSON.stringify(ex),
      });
      const intent = (await request.json());
      setLoading(false)
      console.log(intent)
}

  return (
    <div>
    <form ref={couponForm} onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="coupon-entry">Coupon</label>
        <input
          id="coupon-entry"
          type="text"
          name="coupon"
          required
        />
        <button type="submit" disabled={loading}>
          Apply Coupon
        </button>
      </fieldset>
    </form>
    </div>
  )

}
