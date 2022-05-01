import * as React from "react";
import { Link } from "gatsby";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";


export default function Navbar(props) {
  const { loggedIn, loading } = useAuth();
  const [cartRender, setCartRender] = useState(true);
  const localStorageSetHandler = () => {

    let tempCart = function() {
      try {
      return JSON.parse(localStorage.cart)
      } catch {return []}
    }

    console.log(localStorage.getItem('cart'))
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
      if (cartRender===true) {
        setCartRender(false)
      } else {
        setCartRender(true)
      }
    }
    if (newA.length === 0) {
      return (
        <>
        <div class="cart-cont-empty">
          <p>Your cart is empty!</p>
        </div>
        <button>Go to Shop</button>
        </>
      )
    } else {
      return (
        <>
        {newA && newA.map((el, index) => 
        <div class="cart-cont"><img class="cart-img" height="82" width="82" src={el.url}/><div class="name-total-cart-cont"><div class="cart-name">{el.name}</div><div class="cart-item-total">{el.quantity} × {(el.price).toLocaleString('en-US', {style: 'currency', currency: 'USD',})}</div></div> <div data-index={index} onClick={removeFromCart} class="remove-cart-item">X</div></div>
        )}
        <div class="cart-btn-cont">
          <button>View Cart</button>
          <button>Checkout</button>
        </div>
        </>
      )
    }


  }
  
  const sideNav = () => {

    return (
      <>
     {loading ? (
      <nav className='navLoading'></nav>
     ) : (
      <navmain className='navloaded main-nav'>
      <ul className={`nav`}>

        {!loggedIn ? (
          <>
            <li>
              <Link to="/log-in">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                Sign Up
              </Link>
            </li>
          </>
        ) : (
          <>
          <li  className='nav-logo'>
          <Link to="#home"></Link>
        </li>
          <li className='nav-home'>
          <Link to="#home">
            Home
          </Link>
        </li>
            <li className='nav-orders'>
              <Link to="#orders">
                Orders
              </Link>
            </li>
            <a class='dropdown'>Resources
      <div class="link-dropdown active2">
      <label>Everything Entrepreneurial Blog</label>
      <label>Help Desk</label>
      <label>Contact</label>
    </div></a>
            <li className='nav-payments'>
              <Link to="#payments">
                Payments
              </Link>
            </li>
            <li className='nav-profile'>
              <Link to="#profile">
                Profile
              </Link>
            </li>
            <li className='nav-courses'>
              <Link to="#courses">
                Courses
              </Link>
            </li>
          </>
        )}
      </ul>
    </navmain>
     )}




    </>
    )

  }

  useEffect(() => {
    // const localStorageSetHandler = function(e) {
    //   console.log(localStorage.getItem('cart'))
    // };
    
    document.addEventListener("itemInserted", localStorageSetHandler, false);
  }, []);
  return (
    <>
     {loading ? (
     <navbar class="active"> <input type="checkbox" />
     <span></span>
     <span></span>
     <span></span></navbar>
     ) : (
      <navbar class="active">
        {sideNav()}
          <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
      <ul>
        <li>Shop</li>
    <a class='dropdown'>Cart
      <div class="link-dropdown active2 cart-drop">
      <div>{localStorageSetHandler()}</div>
    </div></a>
        {!loggedIn ? (
          <>
          </>
        ) : (
          <>
          </>
        )}
      </ul>
    </navbar>
     )}




    </>
  );
}
