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
  const [loadCart, setLoadCart] = useState(false)
  const [getStarted, setGetStarted] = useState(0)
  const [shop, setShop] = useState(0)
  const [enroll, setEnroll] = useState(0)
  const [resources, setResources] = useState(0)
  const [navbarWidth, setNavbarWidth] = useState(0)
  const [viewOffer, setViewOffer] = useState(false)
  const [cartText, setCartText] = useState('Cart')
  const offers = [
    {
      "ID": 1509,
      "name": "Entrepreneurial Espresso Denim T-Shirt - Black, L",
      "url": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-denim-t-shirt-black-front-62758f6f2e306.jpg",
      "quantity": 1,
      "price": 30
  },
  {
    "ID": 1184,
    "name": "REVREV Men's Premium Polo - Black, 2XL",
    "url": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/premium-polo-shirt-black-front-62754ae533556.jpg",
    "quantity": 1,
    "price": 30
}
  ]

    const setLocally = function(key, value) {
        
      localStorage.setItem(key, value);
      const event = new Event('itemInserted');
    
      document.dispatchEvent(event);
   
    };


  const localStorageSetHandler = () => {
    const switchViews = () => {
      setLoadCart(false)
      setViewOffer(true)
    }
    let tempCart = function() {
      try {
      return JSON.parse(localStorage.cart)
      } catch {return []}
    }

    console.log(localStorage.getItem('cart'))
    let newA = tempCart();
    const addOffer = (whatToAdd) => {
      newA.push(whatToAdd)
      setLocally('cart', JSON.stringify(newA))
      navigate('/checkout')
    }
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
      if (cartText !== "Cart") {
        setCartText('Cart')
      }
      
      return (
        <>
        <div class="cart-cont-empty">
          <p>Your cart is empty!</p>
        </div>
        <button>Go to Shop</button>
        </>
      )
    } else if(viewOffer === false) {
      if (cartText !== "Cart") {
        setCartText('Cart')
      }
      return (
        <>
        {newA && newA.map((el, index) => 
        <div class="cart-cont"><img class="cart-img" height="82" width="82" src={el.url}/><div class="name-total-cart-cont"><div class="cart-name">{el.name}</div><div class="cart-item-total">{el.quantity} × {(el.price).toLocaleString('en-US', {style: 'currency', currency: 'USD',})}</div></div> <div data-index={index} onClick={removeFromCart} class="remove-cart-item">X</div></div>
        )}
        <div class="cart-btn-cont">
          <button onClick={() => setLoadCart(false)}>Keep Shopping</button>
          <button onClick={() => setViewOffer(true)}>Checkout</button>
        </div>
        </>
      )
    } else if(viewOffer === true) {
      console.log(viewOffer)
      let offerIndex = 0;
      setCartText('Limited Time Offer')
      offers.forEach((offerItem, index) => {
        tempCart().forEach((cartitem, index2) => {
          
          if (cartitem.ID === offerItem.ID) {
            //cart contains this offer item. dont use.
            offerIndex++
          }

        })

     
       });
       if (offerIndex === offers.length) setViewOffer(false);
       console.log(offerIndex)
      return (
        
          <>
          <div class="cart-cont upsell"><img class="cart-img" height="82" width="82" src={offers[offerIndex].url}/><div class="name-total-cart-cont"><div class="cart-name">{offers[offerIndex].name}</div></div><div class='offer-price'>{offers[offerIndex].price}</div></div>
          <div class="cart-btn-cont">
          <button onClick={() => navigate('/checkout')}>No, I'll Pass</button>
          <button>Include In Cart</button>
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
  setNavbarWidth(document.querySelector('.navbar-holder').getBoundingClientRect().width)
  const navWidth = document.querySelector('.navbar-holder').getBoundingClientRect().width;
  setGetStarted(document.getElementsByClassName('down-get-started')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setShop(document.getElementsByClassName('down-shop')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setEnroll(document.getElementsByClassName('down-enroll')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setResources(document.getElementsByClassName('down-resources')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
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
  setShop(document.getElementsByClassName('down-shop')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setEnroll(document.getElementsByClassName('down-enroll')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setResources(document.getElementsByClassName('down-resources')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
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
    <div className={`cart-btn-container cart-${loadCart}`}>
    {true == loadCart
                ? (
                 <div className='cart-outer-cont'>
                   <div className="cart-bar-title">
                      <div className="cart-bar-text">{cartText}</div>
                      <div onClick={() => setLoadCart(false)} className='search-bar-close'>X</div>
                   </div>
                   {localStorageSetHandler()}
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
     <li>REVIVAL<em>OF</em><em>REVENUE</em></li>
        </ul>
     </div>

     <div className="navbar-holder">
      <ul>
        <li onClick={() =>navigate('/')}>Home</li>
        <a class='dropdown down-get-started'>Get Started
      <div style={Object.assign({'left': `-${getStarted}px` }, {'width': `${navbarWidth}px`})} class="link-dropdown active2 drop-get-started">
      <div>aa</div>
    </div></a>
    <a class='dropdown down-shop'>Shop
      <div class="link-dropdown active2 drop-shop">
      <div>aa</div>
    </div></a>
    <a class='dropdown down-enroll'>Enroll
      <div class="link-dropdown active2 drop-enroll">
      <div>aa</div>
    </div></a>
    <a class='dropdown down-resources'>Resources
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
      <navbar onMouseEnter={resizeHandler} class="active">
        {sideNav()}
        <div><input onChange={e => handleChange(e)} type="checkbox" />
     <span class='hm-1'></span>
     <span class='hm-2'></span>
     <span class='hm-3'></span></div>
     <div className="navbar-title">
     <ul>
     <li>REVIVAL<em>OF</em><em>REVENUE</em></li>
        </ul>
     </div>

     <div className="navbar-holder">
      <ul>
        <li className="navbar-home" onClick={() =>navigate('/')}>Home</li>
        <a class='dropdown down-get-started'>Get Started
      <div style={Object.assign({'left': `-${getStarted}px` }, {'width': `${navbarWidth}px`})} class="link-dropdown active2 drop-get-started">
      <div class='navcont-cont'>
        <div class='navcont-50'>
          <div class='navitem-50'>
            <div class='navitemind'>
            <div class='navitem-text'><span>RevRev </span><span>Starter </span><span>Kit</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
          <div class='navitem-50'>
          <div class='navitemind'>
            <div class='navitem-text'><span>The </span><span>TM5 </span><span>Matrix </span><span>Course</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
          <div class='navitem-50'>
          <div class='navitemind'>
            <div class='navitem-text'><span>The </span><span>Exodus </span><span>Workshop</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
          <div class='navitem-50'>
          <div class='navitemind'>
            <div class='navitem-text'><span>Ask </span><span>PK </span><span>Consultation</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
        </div>
        <div class='navcont-50'>
        <div class='navitem-100'>
        <div class='navitemind'>
            <div class='navitem-text'><span>Entrepreneurial </span><span>Espresso </span><span>Challenge</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
        </div>
      </div>
    </div></a>
    <a class='dropdown down-shop'>Shop
      <div style={Object.assign({'left': `-${shop}px` }, {'width': `${navbarWidth}px`})} class="link-dropdown active2 drop-shop">
      <div>aa</div>
    </div></a>
    <a class='dropdown down-enroll'>Enroll
      <div style={Object.assign({'left': `-${enroll}px` }, {'width': `${navbarWidth}px`})} class="link-dropdown active2 drop-enroll">
      <div>aa</div>
    </div></a>
    <a class='dropdown down-resources'>Resources
      <div style={Object.assign({'left': `-${resources}px` }, {'width': `${navbarWidth}px`})} class="link-dropdown active2 drop-resources">
      <div>aa</div>
    </div></a>
    <li onClick={() =>navigate('/account')}>A</li>
        <li class='search-icon' onClick={() => setLoadSearch(true)}></li>
        <li onClick={() => setLoadCart(true)}>C</li>


      </ul>
      </div>
    </navbar>
     )}




    </>
  );
}
