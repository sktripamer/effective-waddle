import * as React from "react";
import { Link } from "gatsby";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";


export default function Navbar(props) {
  const { loggedIn, loading } = useAuth();
  const localStorageSetHandler = () => {
    console.log(localStorage.getItem('cart'))
    let newA = JSON.parse(localStorage.cart);
    return (
      <>
      {newA && newA.map((el, index) => 
      <div class="cart-cont"><img height="42" width="42" src={el.url}/><div class="name-total-cart-cont"><div class="cart-name">{el.name}</div><div class="cart-item-total">{el.quantity} x {(el.price).toLocaleString('en-US', {style: 'currency', currency: 'USD',})}</div></div> <div data-index={index} class="remove-cart-item">X</div></div>
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
     <navbar class="active"><h4>Revival of Revenue</h4></navbar>
     ) : (
      <navbar class="active">
      <h4>Revival of Revenue</h4>
      <ul>
        
        <li>Home</li>
          <a class='dropdown'>Shop
      <div class="link-dropdown active2">
      <label>Shirt Collections</label>
      <label>Hat Collections</label>
      <label>All Products</label>
    </div></a>
          <a class='dropdown'>Resources
      <div class="link-dropdown active2">
      <label>Everything Entrepreneurial Blog</label>
      <label>Help Desk</label>
      <label>Contact</label>
    </div></a>
    <a class='dropdown'>Cart
      <div class="link-dropdown active2 cart-drop">
      <div>{localStorageSetHandler()}</div>
    </div></a>
        {!loggedIn ? (
          <>
              <li>Log in</li>
          </>
        ) : (
          <>
           <li>My Account</li>
          </>
        )}
        <li>Preorder my book!</li>
      </ul>
    </navbar>
     )}




    </>
  );
}
