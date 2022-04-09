import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "gatsby";

import useAuth from "../hooks/useAuth";


export default function Nav() {
  const { loggedIn } = useAuth();
 const [navSelected, setNav] = useState();
  useEffect(() => {
    if (window.location.href.indexOf("orders") > -1) {
        setNav('orders')
    }
    if (window.location.href.indexOf("subscriptions") > -1) {
      setNav('subscriptions')
  }

  }, []);

  return (
    <nav>
      <ul className={`nav ${navSelected}`}>
        <li  className='nav-home'>
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
            <li className='nav-orders'>
              <Link to="/orders">
                Orders
              </Link>
            </li>
            <li className='nav-subscriptions'>
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
  );
}
