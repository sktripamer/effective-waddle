import * as React from "react";
import { useEffect } from "react";
import useAuth, { User } from "../hooks/useAuth";
import { navigate } from 'gatsby';



export default function GetHome() {
  useEffect(() => {
    if (window.location.href.indexOf("home") === -1) {
      window.location.reload();
    }
  });
  const { user } = useAuth();
  const { id } = user as User;

  return (
    <div className='sub-list'>
      <h2>Welcome back!</h2>
      <div class='navcont-100'>
          <div class='navitem-50'>
            <div onClick={() =>navigate('/dashboard/#courses')} class='navitemind'>
            <div class='navitem-text'><span>Your </span><span>Courses</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
          <div class='navitem-50'>
          <div onClick={() =>navigate('/entrepreneurial-espresso')} class='navitemind'>
            <div class='navitem-text'><span>Entrepreneurial </span><span>Espresso</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
          <div class='navitem-50'>
          <div onClick={() =>navigate('/shop')} class='navitemind'>
            <div class='navitem-text'><span>Browse </span><span>Shop</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
          <div class='navitem-50'>
          <div onClick={() =>navigate('/everything-entrepreneurial')} class='navitemind'>
            <div class='navitem-text'><span>Everything</span> <span>Entrepreneurial</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
        </div>


        <div class='contact-usa'>Have comments or need help? Contact us.</div>
    
</div>);
}
