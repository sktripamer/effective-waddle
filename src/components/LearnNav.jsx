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
          <li onClick={() => props.changePage('')} className='nav-logo'>
          <Link to="/learn"></Link>
        </li>
          <li onClick={() => props.changePage('')} className='nav-home'>
          <Link to="/learn">
            Home
          </Link>
        </li>
            <li onClick={() => props.changePage('revrev-courses')} className='nav-orders'>
              <Link to="#revrev-courses">
                RevRev Courses
              </Link>
            </li>
            <li onClick={() => props.changePage('mini-courses')} className='nav-subscriptions'>
              <Link to="#mini-courses">
                Mini Courses
              </Link>
            </li>
            <li onClick={() => props.changePage('revenue-maps')} className='nav-payments'>
              <Link to="#revenue-maps">
                Revenue Maps
              </Link>
            </li>
            <li  onClick={() => props.changePage('profile')} className='nav-profile'>
              <Link to="#profile">
                Challenges
              </Link>
            </li>
            <li onClick={() => props.changePage('courses')} className='nav-courses'>
              <Link to="#courses">
                Workshops
              </Link>
            </li>
          </>
        
      </ul>
    </nav>
     )}




    </>
  );
}
