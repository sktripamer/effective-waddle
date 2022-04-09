import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";

import useAuth from "../hooks/useAuth";


export default function Nav(props) {
  const { loggedIn, loading } = useAuth();
 const [navSelected, setNav] = useState();
 const [hoverClick, setHoverClick] = useState('');
  const clickHandle = () => {
    setHoverClick('just-clicked')
  }
  const mouseHandle = () => {
    setHoverClick('')
  }
  useEffect(() => {
    if (window.location.href.indexOf("orders") > -1) {
        setNav('orders')
    }
    if (window.location.href.indexOf("subscriptions") > -1) {
      setNav('subscriptions')
    }
  }, []);

  return (
    <>
     {loading ? (
      <nav className='navLoading'></nav>
     ) : (
      <nav classname='navloaded'>
      <ul className={`nav ${navSelected} ${hoverClick}`}>
        <li onClick={clickHandle} onMouseLeave={mouseHandle} className='nav-home'>
          <Link to="/">
            Home
          </Link>
        </li>
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
            <li onClick={() => props.changePage('orders')} onMouseLeave={mouseHandle} className='nav-orders'>
              <Link to="#orders">
                Orders
              </Link>
            </li>
            <li onClick={clickHandle} onMouseLeave={mouseHandle} className='nav-subscriptions'>
              <Link to="/subscriptions">
                Subscriptions
              </Link>
            </li>
            <li className='nav-payments'>
              <Link to="/payments">
                Payments
              </Link>
            </li>
            <li className='nav-profile'>
              <Link to="/profile">
                Profile
              </Link>
            </li>
            <li className='nav-logout'>
              <Link to="/log-out">
                Log Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
     )}




    </>
  );
}
