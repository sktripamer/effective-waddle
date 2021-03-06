import * as React from "react";
import { Link } from "gatsby";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import SearchSystem from './SearchSystem';
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
  const [mobileMenu, setMobileMenu] = useState(0)

  const enterCart = () => {
    setViewOffer(false)
    setCartText('Cart')
    setLoadCart(true)
  }



  const offers = [
    {
      "ID": 2054,
      "name": "	Full Course Revenue Map",
      "url": "https://portal.revrevdev.xyz/wp-content/uploads/2022/06/course.jpg",
      "quantity": 1,
      "price": 99,
      "total": 99
  }
  ]

    const setLocally = function(key, value) {
        
      localStorage.setItem(key, value);
      const event = new Event('itemInserted');
    
      document.dispatchEvent(event);
   
    };
    const propCartChange = () => {
      try {
        props.changeCart(false);
      } catch {

      }
     
      setLoadCart(false)
    }

  const localStorageSetHandler = () => {
    let offerIndex = 0;
    const switchViews = () => {
      setLoadCart(false)
      setViewOffer(true)
    }
    let tempCart = function() {
      try {
      return JSON.parse(localStorage.cart)
      } catch {return []}
    }
    let subtotal = 0;
    let cartamt = 0;
    let finalsub = ''
    tempCart().forEach((tempitem, index) => {
      subtotal += tempitem.total
      cartamt += tempitem.quantity
      if (tempitem.cquantity !== undefined) {
        cartamt += tempitem.cquantity
      }
 
    })
    try {
      if (cartamt > 9) {
        document.getElementById('cart-icon').className = 'cart-icon-10'
      } else {
        document.getElementById('cart-icon').className = 'cart-icon-' + cartamt.toString()
      }
    }catch{

    }

    if (!subtotal.toString().includes('.')) {
      finalsub = subtotal.toString() + '.00'
    } else {
      finalsub = subtotal.toString()
    }
    let newA = tempCart();
    const addOffer = (whatToAdd) => {
      offerIndex = 0; 
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
    
    if (viewOffer === true) {
      console.log(viewOffer)
      let removeThese = [];
      if (cartText !== 'Limited Time Offer')  setCartText('Limited Time Offer')
    
      offers.forEach((offerItem, index) => {
        tempCart().forEach((cartitem, index2) => {
          
          if (cartitem.ID === offerItem.ID) {
            //cart contains this offer item. dont use.
           removeThese.push(index)
          }

        })

     
       });
       let tempOffers = offers;
       for (var i = removeThese.length -1; i >= 0; i--)
        tempOffers.splice(removeThese[i],1);

       if (tempOffers.length === 0) {
         navigate('/checkout');
        return
        }
       console.log(offerIndex)
       let newSubtotal = 0;
       let finalnewsub = '';
       tempCart().forEach((tempitem, index) => {
        newSubtotal += tempitem.total
       })
       newSubtotal += tempOffers[0].price
       if (!newSubtotal.toString().includes('.')) {
        finalnewsub = newSubtotal.toString() + '.00'
    } else {
      finalnewsub = newSubtotal.toString()
    }
    let offerPrice = tempOffers[0].price;
    let newOfferPrice = '';
    if (!offerPrice.toString().includes('.')) {
      newOfferPrice = offerPrice.toString() + '.00'
  } else {
    newOfferPrice = offerPrice.toString()
  }
      return (
        
          <>
          <div class="cart-cont upsell"><img class="cart-img" height="82" width="82" src={tempOffers[0].url}/><div class="name-total-cart-cont"><div class="cart-name">{tempOffers[0].name}</div></div><div class='offer-price'>${newOfferPrice}</div></div>
          <div class='cart-divider'></div>
          <div class='cart-subtotal-cont'>
          <div class='cart-subtotal-text'>Shipping & taxes calculated at checkout</div>
          <div class='cart-subtotal-amount'>New Subtotal ${finalnewsub}</div>
        </div>
          <div class="cart-btn-cont">
          <button onClick={() => navigate('/checkout')}>No, I'll Pass</button>
          <button onClick={() => addOffer(tempOffers[0])}>Include In Cart</button>
        </div>
          </>
        
       
      )
    }


    if (newA.length === 0) {
      // if (cartText !== "Cart") {
      //   setCartText('Cart')
      // }
      
      return (
        <>
        <div class="cart-cont-empty">
          <p>Your cart is empty!</p>
        </div>
        <button>Go to Shop</button>
        </>
      )
    } else {
      // if (cartText !== "Cart") {
      //   setCartText('Cart')
      // }
      return (
        <>
        <div class='cart-all-items'>
        {newA && newA.map((el, index) => 
        <div class="cart-cont"><img class="cart-img" height="82" width="82" src={el.url}/><div class="name-total-cart-cont"><div class="cart-name">{el.name}</div><div class="cart-item-total">{el.quantity} ?? {(el.price).toLocaleString('en-US', {style: 'currency', currency: 'USD',})}</div></div> <div data-index={index} onClick={removeFromCart} class="remove-cart-item">X</div></div>
        )}
        </div>
        <div class='cart-divider'></div>
        <div class='cart-subtotal-cont'>
          <div class='cart-subtotal-text'>Shipping & taxes calculated at checkout</div>
          <div class='cart-subtotal-amount'>Subtotal ${finalsub}</div>
        </div>
        <div class="cart-btn-cont">
          <button onClick={() => propCartChange()}>Keep Shopping</button>
          <button onClick={() => setViewOffer(true)}>Checkout</button>
        </div>
        </>
      )
    }


  }
  
  const clicker1 = () => {
    setMobileMenu(1)
  }
  const clicker2 = () => {
    setMobileMenu(2)
  }
  const clicker3 = () => {
    setMobileMenu(3)
  }
  const clicker4 = () => {
    setMobileMenu(4)
  }

  const sideNav = () => {
 
    return (
      <>
     {loading ? (
      <nav className={`navLoading hm-${hamburger}`}></nav>
     ) : (
      <navmain className={`navloaded main-nav hm-${hamburger}`}>
		<ul>
			<li><a class='mobile-header-text' href="#">Revival of Revenue</a></li>

			<li class="dropdown">
				<a href="#" onClick={clicker1} class={`d-btn mm1 mc-${mobileMenu}`}>Get Started</a>
				<ul class="d-menu">
					<li><a href="#">RevRev Starter Kit</a></li>
					<li><a href="#">The TM5 Matrix Course</a></li>
					<li><a href="#">The Exodus Workshop</a></li>
					<li><a href="#">Ask PK Consultation</a></li>
          <li><a href="#">Entrepreneurial Espresso Challenge</a></li>
			
				</ul>
			</li>
			<li class="dropdown">
				<a href="#" onClick={clicker2} class={`d-btn mm2 mc-${mobileMenu}`}>Shop</a>
				<ul class="d-menu">
					<li><a href="/shop/courses">Courses</a></li>
					<li><a href="/shop/hats">Hats</a></li>
					<li><a href="/shop/shirts">Shirts</a></li>
					<li><a href="/shop/accessories">Accessories</a></li>
					<li><a href="/shop">All Products</a></li>

				</ul>
			</li>
      <li class="dropdown">
				<a href="#" onClick={clicker3}  class={`d-btn mm3 mc-${mobileMenu}`}>Enroll</a>
				<ul class="d-menu">
					<li><a href="#">RevRev Starter Kit</a></li>
					<li><a href="#">The TM5 Matrix Course</a></li>
					<li><a href="#">The Exodus Workshop</a></li>
					<li><a href="#">Ask PK Consultation</a></li>
          <li><a href="#">Entrepreneurial Espresso Challenge</a></li>
			
				</ul>
			</li>
      <li class="dropdown">
				<a href="#" onClick={clicker4}  class={`d-btn mm4 mc-${mobileMenu}`}>Resources</a>
				<ul class="d-menu">
					<li><a href="#">RevRev Starter Kit</a></li>
					<li><a href="#">The TM5 Matrix Course</a></li>
					<li><a href="#">The Exodus Workshop</a></li>
					<li><a href="#">Ask PK Consultation</a></li>
          <li><a href="#">Entrepreneurial Espresso Challenge</a></li>
			
				</ul>
			</li>
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

}


useEffect(() => {
  if (props.viewCart === true) setLoadCart(true)


}, [props.viewCart]);

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
    if (e.target.checked === true) {
      document.getElementsByTagName( 'html' )[0].classList.add('noover')
    } else {
      document.getElementsByTagName( 'html' )[0].classList.remove('noover')
    }
    // do whatever you want with isChecked value
  }
  useEffect(() => {
    // const localStorageSetHandler = function(e) {
    //   console.log(localStorage.getItem('cart'))
    // };

    document.addEventListener("itemInserted", localStorageSetHandler, false);
  }, []);


  let tempCart = function() {
    try {
    return JSON.parse(localStorage.cart)
    } catch {return []}
  }

  let cartamt = 0;
  tempCart().forEach((tempitem, index) => {
    cartamt += tempitem.quantity
    if (tempitem.cquantity !== undefined) {
      cartamt += tempitem.cquantity
    }

  })

try {

  if (typeof window !== "undefined") {
    if (cartamt > 9) {
      document.getElementById('cart-icon').className = 'cart-icon-10'
    } else {
      document.getElementById('cart-icon').className = 'cart-icon-' + cartamt.toString()
  
    }
  }
} catch {

}






  return (
    <>
    {/* <div className={`search-btn-container search-${loadSearch}`}>
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
    </div> */}
    <div className={`cart-btn-container cart-${loadCart}`}>
    {true == loadCart
                ? (
                 <div className='cart-outer-cont'>
                   <div className="cart-bar-title">
                      <div className="cart-bar-text">{cartText}</div>
                      <div onClick={() => propCartChange()} className='search-bar-close'>X</div>
                   </div>
                   {localStorageSetHandler()}
                   </div>
                  )
                : ""}
    </div>
     {loading ? (
     <navbar class="active"> 
     <div className="navbar-title">
     <ul>
     <li>REVIVAL<em>OF</em><em>REVENUE</em></li>
        </ul>
     </div>

     <div className="navbar-holder">
      <ul>

      <li onClick={() =>navigate('/')}>Home</li>
    <li class='accocunt-icon' onClick={() =>navigate('/dashboard')}></li>
        <li class='cart-icon-load' onClick={enterCart}></li>


      </ul>
      </div>
     </navbar>
     ) : (
      <navbar onMouseEnter={resizeHandler} class="active">
        {sideNav()}
     <div className="navbar-title">
     <ul>
     <li>REVIVAL<em>OF</em><em>REVENUE</em></li>
        </ul>
     </div>

     <div className="navbar-holder">
      <ul>

      <li  class='home-icon' onClick={() => navigate('/')}></li>
        <li class='account-icon' onClick={() =>navigate('/dashboard')}></li>
        <li id='cart-icon' class='cart-icon-load' onClick={enterCart}></li>

      </ul>
      </div>
    </navbar>
     )}




    </>
  );
}
