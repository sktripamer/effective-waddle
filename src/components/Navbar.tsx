import * as React from "react";
import { Link } from "gatsby";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";


export default function Navbar(props) {
  const { loggedIn, loading } = useAuth();

  
  useEffect(() => {
    window.addEventListener('storage', () => {
      // When local storage changes, dump the list to
      // the console.
      console.log(JSON.parse(window.localStorage.getItem('cart')));
    });
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
