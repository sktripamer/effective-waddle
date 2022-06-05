import * as React from "react";
import { Link } from "gatsby";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import SearchSystem from '../components/SearchSystem';
import { navigate } from 'gatsby';

export default function Navbar(props) {
  const { loggedIn, loading } = useAuth();
  const [cartRender, setCartRender] = useState(true);
  const [hamburger, setHamburger] = useState(false)
  const [loadSearch, setLoadSearch] = useState(false)
  const [getStarted, setGetStarted] = useState(0)
  const [navbarWidth, setNavbarWidth] = useState(0)
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
      <nav className={`navLoading hm-${hamburger}`}></nav>
     ) : (
      <navmain className={`navloaded main-nav hm-${hamburger}`}>
      <ul className={`nav`}>

        {!loggedIn ? (
          <>
       <a class='dropdown'>Home
      <div class="link-dropdown active2">
    </div></a>
            <a class='dropdown'>All Products
      <div class="link-dropdown active2">
      <label>View All Products</label>
      <label>Hats</label>
      <label>Other categories</label>
    </div></a>
    <a class='dropdown'>All Products
      <div class="link-dropdown active2">
      <label>Coming Soon!</label>
    </div></a>
          <div class='nav-content-section'>
            placeholder

          </div>

          <div class='nav-button-cont'>
           <button>cart</button>
           <button>checkout</button>
          </div>
          </>
        ) : (
          <>
            <a class='dropdown'>Home
      <div class="link-dropdown active2">
    </div></a>
            <a class='dropdown'>All Products
      <div class="link-dropdown active2">
      <label>View All Products</label>
      <label>Hats</label>
      <label>Other categories</label>
    </div></a>
    <a class='dropdown'>All Products
      <div class="link-dropdown active2">
      <label>Coming Soon!</label>
    </div></a>
          <div class='nav-content-section'>
            placeholder

          </div>

          <div class='nav-button-cont'>
           <button>cart</button>
           <button>checkout</button>
          </div>
          </>
        )}
      </ul>
    </navmain>
     )}




    </>
    )

  }
  let offsetY = 100;


  const handleScroller = () => {
    if (window.pageYOffset > offsetY) {
      document.querySelector('navbar').classList.remove('active')
    } else {
      document.querySelector('navbar').classList.add('active')
      
    }
    
    offsetY = window.pageYOffset > 100 ? window.pageYOffset : 100
  }

const resizeHandler = () => {
  setNavbarWidth(document.querySelector('navbar').getBoundingClientRect().width)
  const navWidth = document.querySelector('navbar').getBoundingClientRect().width;
  setGetStarted(document.getElementsByClassName('down-get-started')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
}

  useEffect(() => {
    window.addEventListener('scroll', handleScroller, { passive: true });
    window.addEventListener('resize', resizeHandler);
      return () => {
       window.removeEventListener('scroll', handleScroller);
       window.removeEventListener('resize', resizeHandler);
      };
  }, []);
  const handleChange = (e) => {
    setHamburger(e.target.checked)
    // do whatever you want with isChecked value
  }
  useEffect(() => {
    // const localStorageSetHandler = function(e) {
    //   console.log(localStorage.getItem('cart'))
    // };
    setNavbarWidth(document.querySelector('navbar').getBoundingClientRect().width)
    const navWidth = document.querySelector('navbar').getBoundingClientRect().width;
  setGetStarted(document.getElementsByClassName('down-get-started')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
    document.addEventListener("itemInserted", localStorageSetHandler, false);
  }, []);
  return (
    <>
    <div className={`search-btn-container search-${loadSearch}`}>
    {true == loadSearch
                ? (
                 <div className='search-outer-cont'>
                   <div className="search-bar-title">
                      <div className="search-bar-text">Search</div>
                      <div onClick={() => setLoadSearch(false)} className='search-bar-close'>X</div>
                   </div>
                    <SearchSystem/>
                   </div>
                  )
                : ""}
    </div>
     {loading ? (
     <navbar class="active"> 
     <div><input onChange={e => handleChange(e)} type="checkbox" />
     <span class='hm-1'></span>
     <span class='hm-2'></span>
     <span class='hm-2'></span></div>
     <div className="navbar-title">
     <ul>
        <li>Shop</li>
        </ul>
     </div>

     <div className="navbar-holder">
      <ul>
        <li onClick={() =>navigate('/')}>Home</li>
        <a class='dropdown down-get-started'>Get Started
      <div style={Object.assign({'left': `-${getStarted}px` }, {'width': `${navbarWidth}px`})} class="link-dropdown active2 drop-get-started">
      <div>aa</div>
    </div></a>
    <a class='dropdown'>Shop
      <div class="link-dropdown active2 drop-shop">
      <div>aa</div>
    </div></a>
    <a class='dropdown'>Enroll
      <div class="link-dropdown active2 drop-enroll">
      <div>aa</div>
    </div></a>
    <a class='dropdown'>Resources
      <div class="link-dropdown active2 drop-resources">
      <div>aa</div>
    </div></a>
    <li onClick={() =>navigate('/account')}>A</li>
        <li onClick={() => setLoadSearch(true)}>S</li>
    <a class='dropdown'>C
      <div class="link-dropdown active2 cart-drop">
      <div></div>
    </div></a>


      </ul>
      </div>
     </navbar>
     ) : (
      <navbar class="active">
        {sideNav()}
        <div><input onChange={e => handleChange(e)} type="checkbox" />
     <span class='hm-1'></span>
     <span class='hm-2'></span>
     <span class='hm-3'></span></div>
     <div className="navbar-title">
     <ul>
        <li>Shop</li>
        </ul>
     </div>

     <div className="navbar-holder">
      <ul>
        <li onClick={() =>navigate('/')}>Home</li>
        <a class='dropdown down-get-started'>Get Started
      <div style={Object.assign({'left': `-${getStarted}px` }, {'width': `${navbarWidth}px`})} class="link-dropdown active2 drop-get-started">
      <div>aa</div>
    </div></a>
    <a class='dropdown'>Shop
      <div class="link-dropdown active2 drop-shop">
      <div>aa</div>
    </div></a>
    <a class='dropdown'>Enroll
      <div class="link-dropdown active2 drop-enroll">
      <div>aa</div>
    </div></a>
    <a class='dropdown'>Resources
      <div class="link-dropdown active2 drop-resources">
      <div>aa</div>
    </div></a>
    <li onClick={() =>navigate('/account')}>A</li>
        <li onClick={() => setLoadSearch(true)}>S</li>
    <a class='dropdown'>C
      <div class="link-dropdown active2 cart-drop">
      <div>{localStorageSetHandler()}</div>
    </div></a>


      </ul>
      </div>
    </navbar>
     )}




    </>
  );
}
