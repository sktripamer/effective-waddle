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
  const [mobileMenu, setMobileMenu] = useState(0)

  const enterCart = () => {
    setViewOffer(false)
    setCartText('Cart')
    setLoadCart(true)
  }



  const offers = [
    {
      "ID": 1509,
      "name": "Entrepreneurial Espresso Denim T-Shirt - Black, L",
      "url": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/unisex-denim-t-shirt-black-front-62758f6f2e306.jpg",
      "quantity": 1,
      "price": 30,
      "total": 30
  },
  {
    "ID": 1184,
    "name": "REVREV Men's Premium Polo - Black, 2XL",
    "url": "https://portal.revrevdev.xyz/wp-content/uploads/2022/05/premium-polo-shirt-black-front-62754ae533556.jpg",
    "quantity": 1,
    "price": 30,
    "total": 30
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
    if (cartamt > 9) {
      document.getElementById('cart-icon').className = 'cart-icon-10'
    } else {
      document.getElementById('cart-icon').className = 'cart-icon-' + cartamt.toString()

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
        <div class="cart-cont"><img class="cart-img" height="82" width="82" src={el.url}/><div class="name-total-cart-cont"><div class="cart-name">{el.name}</div><div class="cart-item-total">{el.quantity} × {(el.price).toLocaleString('en-US', {style: 'currency', currency: 'USD',})}</div></div> <div data-index={index} onClick={removeFromCart} class="remove-cart-item">X</div></div>
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
  setNavbarWidth(document.querySelector('.navbar-holder').getBoundingClientRect().width)
  const navWidth = document.querySelector('.navbar-holder').getBoundingClientRect().width;
  setGetStarted(document.getElementsByClassName('down-get-started')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setShop(document.getElementsByClassName('down-shop')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setEnroll(document.getElementsByClassName('down-enroll')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setResources(document.getElementsByClassName('down-resources')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
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
    setNavbarWidth(document.querySelector('navbar').getBoundingClientRect().width)
    const navWidth = document.querySelector('navbar').getBoundingClientRect().width;
  setGetStarted(document.getElementsByClassName('down-get-started')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setShop(document.getElementsByClassName('down-shop')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setEnroll(document.getElementsByClassName('down-enroll')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
  setResources(document.getElementsByClassName('down-resources')[0].getBoundingClientRect().left - (window.innerWidth - navWidth) / 2)
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

  if (typeof window !== "undefined") {
    if (cartamt > 9) {
      document.getElementById('cart-icon').className = 'cart-icon-10'
    } else {
      document.getElementById('cart-icon').className = 'cart-icon-' + cartamt.toString()
  
    }
  }



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
                      <div onClick={() => propCartChange()} className='search-bar-close'>X</div>
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
        <li  class='search-icon' onClick={() => setLoadSearch(true)}></li>
        <li class='cart-icon-load' onClick={enterCart}></li>


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
      <div class='navcont-cont'>
        <div class='navcont-50'>
          <div class='navitem-50'>
            <div onClick={() =>navigate('/shop/hats')} class='navitemind'>
            <div class='navitem-text'><span>Hats</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
          <div class='navitem-50'>
          <div onClick={() =>navigate('/shop/shirts')} class='navitemind'>
            <div class='navitem-text'><span>Shirts</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
          <div class='navitem-50'>
          <div onClick={() =>navigate('/shop/accessories')} class='navitemind'>
            <div class='navitem-text'><span>Accessories</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
          <div class='navitem-50'>
          <div onClick={() =>navigate('/shop')} class='navitemind'>
            <div class='navitem-text'><span>All</span> <span>Products</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
        </div>
        <div class='navcont-50'>
        <div class='navitem-100'>
        <div onClick={() =>navigate('/shop/courses')} class='navitemind'>
            <div class='navitem-text'><span>Courses</span></div>
            <img src={'/place.jpg'}/>
            </div>
          </div>
        </div>
      </div>
    </div></a>
    <a class='dropdown down-enroll'>Enroll
      <div style={Object.assign({'left': `-${enroll}px` }, {'width': `${navbarWidth}px`})} class="link-dropdown active2 drop-enroll">
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
    <a class='dropdown down-resources'>Resources
      <div style={Object.assign({'left': `-${resources}px` }, {'width': `${navbarWidth}px`})} class="link-dropdown active2 drop-resources">
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
    <li onClick={() =>navigate('/account')}>A</li>
        <li class='search-icon' onClick={() => setLoadSearch(true)}></li>
        <li id='cart-icon' class='cart-icon-load' onClick={enterCart}></li>


      </ul>
      </div>
    </navbar>
     )}




    </>
  );
}
