import * as React from "react";
import { Link } from "gatsby";

import useAuth from "../hooks/useAuth";


export default function Nav(props) {
  const { loggedIn, loading } = useAuth();
  return (
    <>
     {loading ? (
      <nav className='navLoading'></nav>
     ) : (
      <nav classname='navloaded'>
      <ul className={`nav  ${props.classPass}`}>
          <>
          <li onClick={() => props.changePage('dashboard')} className='nav-logo'>
          <Link to="#dashboard"></Link>
        </li>
          <li onClick={() => props.changePage('dashboard')} className='nav-home'>
          <Link to="#dashboard">
            Home
          </Link>
        </li>
            <li onClick={() => props.changePage('orders')} className='nav-orders'>
              <Link to="#orders">
                Orders
              </Link>
            </li>
            <li onClick={() => props.changePage('subscriptions')} className='nav-subscriptions'>
              <Link to="#subscriptions">
                Subscriptions
              </Link>
            </li>
            <li onClick={() => props.changePage('payments')} className='nav-payments'>
              <Link to="#payments">
                Payments
              </Link>
            </li>
            <li  onClick={() => props.changePage('profile')} className='nav-profile'>
              <Link to="#profile">
                Profile
              </Link>
            </li>
            <li onClick={() => props.changePage('courses')} className='nav-courses'>
              <Link to="#courses">
                Courses
              </Link>
            </li>
          </>
        
      </ul>
    </nav>
     )}




    </>
  );
}
