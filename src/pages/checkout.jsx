import React, { useState, useRef, useEffect } from 'react';

export default function Checkout() {
const [loading, setLoading] = useState(false);
const [cartRender, setCartRender] = useState(true);
const couponForm = useRef(null);
useEffect(() => {
    document.addEventListener("itemInserted", localStorageSetHandler, false);
    document.addEventListener("storage", reRender, false);
}, []);


const reRender = () => {
    console.log('rerender')
    if (cartRender===true) {
        setCartRender(false)
      } else {
        setCartRender(true)
      }
}
const localStorageSetHandler = () => {

    console.log('triggered')
    let tempCart = function() {
        try {
        return JSON.parse(localStorage.cart)
        } catch {return []}
    }
    let subtotal = 0;
    let finalsub = ''
    tempCart().forEach((tempitem, index) => {
      subtotal += tempitem.total
    })
    if (!subtotal.toString().includes('.')) {
      finalsub = subtotal.toString() + '.00'
    } else {
      finalsub = subtotal.toString()
    }
    let newA = tempCart();
    const removeFromCart = (e) => {
        let tempCart = function() {
          try {
          return JSON.parse(localStorage.cart)
          } catch {return []}
        }
      
        let cartModifier = tempCart();
         
        cartModifier.splice(e.target.dataset.index, 1)
    
        const setLocal = function(key, value) {
         
          localStorage.setItem(key, value);
          const event = new Event('itemInserted');
        
          document.dispatchEvent(event);
       
        };
    
        setLocal('cart', JSON.stringify(cartModifier))

    }
    if (newA.length === 0) {
        // if (cartText !== "Cart") {
        //   setCartText('Cart')
        // }
        
        return (
          <>
          <div class="cart-cont-empty">
            <p>Your cart is empty!</p>
          </div>
          <button>Go to Shop</button>
          </>
        )
      } else {
        // if (cartText !== "Cart") {
        //   setCartText('Cart')
        // }
        return (
          <>
          <div class='cart-all-items'>
          {newA && newA.map((el, index) => 
          <div class="cart-cont"><img class="cart-img" height="82" width="82" src={el.url}/><div class="name-total-cart-cont"><div class="cart-name">{el.name}</div><div class="cart-item-total">{el.quantity} × {(el.price).toLocaleString('en-US', {style: 'currency', currency: 'USD',})}</div></div> <div data-index={index} onClick={removeFromCart} class="remove-cart-item">X</div></div>
          )}
          </div>
          <div class='cart-divider'></div>
          <div class='cart-subtotal-cont'>
            <div class='cart-subtotal-text'>Shipping & taxes calculated at checkout</div>
            <div class='cart-subtotal-amount'>Subtotal ${finalsub}</div>
          </div>
          </>
        )
      }
}



async function handleSubmit(e) {
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
    <div class='checkout-page'>
        <div class='checkout-header-bar'></div>
        <div class='checkout-form-section'>
            checkout form here
        </div>
        <div class='checkout-cart-section'>
            <div class='checkout-cart-cont'>{localStorageSetHandler()}</div>
            <div class='coupon-section'>
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
        </div>


  
    </div>
  )

}
