import * as React from "react";
import { Link } from "gatsby";

import useAuth from "../hooks/useAuth";


export default function Navbar(props) {
  const { loggedIn, loading } = useAuth();
  return (
    <>
     {loading ? (
     <navbar class="active"><h4>Revival of Revenue</h4></navbar>
     ) : (
      <navbar class="active">
      <h4>Revival of Revenue</h4>
      <ul>
        
        <li>Home</li>
          <a dropdown>Shop
      <div class="link-dropdown active2">
      <label>Shirt Collections</label>
      <label>Hat Collections</label>
      <label>All Products</label>
    </div></a>
          <a dropdown>Resources
      <div class="link-dropdown active2">
      <label>Everything Entrepreneurial Blog</label>
      <label>Help Desk</label>
      <label>Contact</label>
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
