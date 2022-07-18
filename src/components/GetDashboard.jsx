  import * as React from "react";
  import { useState, useEffect, useRef } from "react";

  import { navigate } from 'gatsby';
  import CourseOverview from '../components/CourseOverview';
  import RevRevCourseSmallList from '../components/RevRevCourseSmallList';
  import RevMapCourseSmallList from '../components/RevMapCourseSmallList';
  import RevMiniCourseSmallList from '../components/RevMiniCourseSmallList';
  import Layout from "../components/Layout";
  import DOMPurify from 'dompurify';
  import Navbar from "../components/NavbarLearn";
  import { useQuery, gql } from "@apollo/client";
      import {loadStripe} from '@stripe/stripe-js/pure';
  import {
      CardElement,
      Elements,
      useStripe,
      useElements,
    } from '@stripe/react-stripe-js'; 
    import { isEmpty } from 'lodash';
    import useAuth from "../hooks/useAuth";
    import InputField2 from '../components/inputfield';
    import Select from "react-dropdown-select";


  export default function GetHome() {
    const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))
    const [prevScroll, setPrevScroll] = useState(0)
  const [loadingCourses, setLoadingCourses] = useState(true)
  const [details, setDetails] = useState({})
  const [loadPreorder, setLoadPreorder] = useState(false)
  const [loadDetails, setLoadDetails] = useState(false)
  const [genericError, setGenericError] = useState(false)
  const [courseData, setCourseData] = useState([])
  const [openCart, setOpenCart] = useState(false)
  const [cartItem, setCartItem] = useState(0);
  const { loggedIn } = useAuth();
  const [addedToCarts, setAddedToCarts] = useState([])
  const sanitizedData = (sendData) => ({
    __html: DOMPurify.sanitize(sendData)
  })
    // useEffect(() => {
    //   if (window.location.href.indexOf("dashboard") === -1) {
    //     window.location.reload();
    //   }
    // });
    useEffect(() => {
      async function fetchMyAPI() {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); 
        try {
          const request = await fetch('https://portal.revrevdev.xyz/wp-json/rev-process/courseoffers', {
            method: 'POST',
            signal: controller.signal,
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const courses = (await request.json());
          console.log(courses)
        setLoadingCourses(false)
        setCourseData(courses)
        } catch (error) {
          console.log(error)
          setGenericError(true)
          setLoadingCourses(false)
        }
        clearTimeout(timeoutId);
      }
      fetchMyAPI()
    }, []);

    useEffect(() => {
      document.addEventListener("itemInserted", localStorageSetHandler, false);
      let tempCart = function() {
          try {
          return JSON.parse(localStorage.cart)
          } catch {return []}      
      }
      let addedToCart = []
      tempCart().forEach((cartitem, index) => {
   
                  addedToCart.push(cartitem.ID)
              

      })
      console.log(addedToCart)
      setAddedToCarts(addedToCart);
      
  }, []);
  const localStorageSetHandler = () => {
    let tempCart = function() {
        try {
        return JSON.parse(localStorage.cart)
        } catch {return []}      
    }
    let addedToCart = []
    tempCart().forEach((cartitem, index) => {
                addedToCart.push(cartitem.ID)

    })
    console.log(addedToCart)
    setAddedToCarts(addedToCart);
}
    function preHide() {
      document.getElementsByTagName( 'html' )[0].style.cssText = ``;
      document.getElementsByTagName( 'body' )[0].style.cssText = ``;
      window.scrollTo(0, prevScroll)
      document.getElementsByTagName( 'html' )[0].classList.remove('noover')
      document.getElementsByTagName( 'main' )[0].classList.remove('modalup')
      setLoadDetails(false)
      setLoadPreorder(false)
      // document.getElementsByClassName('preorder-btn-container')[0].removeEventListener('pointermove',  preventDefault)
      // document.getElementsByClassName('preorder-btn-container')[0].removeEventListener('touchmove',  preventDefault)
  }
  const preReveal = () => {
    console.log('aaa')
    setPrevScroll(window.scrollY)
    document.getElementsByTagName( 'html' )[0].classList.add('noover')
    document.getElementsByTagName( 'main' )[0].classList.add('modalup')
    document.getElementsByTagName( 'html' )[0].style.cssText = `height:${window.innerHeight - 1}px`;
    document.getElementsByTagName( 'body' )[0].style.cssText = `height:${window.innerHeight - 1}px`;
    setLoadDetails(false)
    setLoadPreorder(true)
    // document.getElementsByClassName('preorder-btn-container')[0].addEventListener('pointermove',  preventDefault)
    // document.getElementsByClassName('preorder-btn-container')[0].addEventListener('touchmove',  preventDefault)
  }
  const prePreReveal = () => {
    console.log('aba')
    setPrevScroll(window.scrollY)
    document.getElementsByTagName( 'html' )[0].classList.add('noover')
    document.getElementsByTagName( 'main' )[0].classList.add('modalup')
    document.getElementsByTagName( 'html' )[0].style.cssText = `height:${window.innerHeight - 1}px`;
    document.getElementsByTagName( 'body' )[0].style.cssText = `height:${window.innerHeight - 1}px`;
    setLoadDetails(true)
    setLoadPreorder(true)
    // document.getElementsByClassName('preorder-btn-container')[0].addEventListener('pointermove',  preventDefault)
    // document.getElementsByClassName('preorder-btn-container')[0].addEventListener('touchmove',  preventDefault)

  }
    const closePreviewOpenCart = () => {
      setOpenCart(true)
      setLoadDetails(false)
      setLoadPreorder(false)
    }
    const SimpleCart = (e) => {
      let dbID;
       let varName;
       let varImage;
       let varPrice;
       let virt;
          dbID = parseInt(e.target.dataset.cartid)
          varName =  e.target.dataset.name
          varImage =  e.target.dataset.img
          varPrice = parseInt(e.target.dataset.price);
          virt = true
      let tempCart = function() {
       try {
       return JSON.parse(localStorage.cart)
       } catch {return []}      
   }
   
     let cartObj = {
       ID: dbID,
       name: varName,
       url: varImage,
       quantity: 1,
       price: varPrice,
       total: varPrice,
       v: virt
      }
      console.log(cartObj)
      let cartModifier = tempCart();
      let cartItemFound = false;
   
   
      //search through the localstorage cart array to find if this item youre adding already exists in it. if it does, modify it's quantity.
      tempCart().forEach((cartitem, index) => {
       if (cartitem.ID === cartObj.ID) {
          if (cartObj.quantity === 0) {
           cartModifier.splice(index, 1)
           cartItemFound = true;
           setAddedToCart(false)
          } else {
           cartModifier[index].quantity = cartObj.quantity
           cartModifier[index].total = cartObj.total
           cartItemFound = true;
          }
   
   
       }
    
      });
   
   
      //if no duplicate cart item is found to already exist in localstorage cart array, simply add it to the array.
      if (cartItemFound === false && cartObj.quantity !== 0) {
          cartModifier.push(cartObj)
          const newCart = parseInt(e.target.dataset.cartid)
            
            const updatedCartsArray = [...addedToCarts, newCart];
              console.log(updatedCartsArray)
            setAddedToCarts(updatedCartsArray);
      }
     const setLocal = function(key, value) {
          
       localStorage.setItem(key, value);
       const event = new Event('itemInserted');
     
       document.dispatchEvent(event);
    
     };
     setLocal('cart', JSON.stringify(cartModifier))
   
   }
   const buyNow = (cart) => {
    console.log('hereaa')
   setCartItem([cart])
   setLoadDetails(false)
}

    return (
      <Layout htmlClassName={"learndash"} seoTitle={"Learn With PK"} seoTitleTemplate="Amazing Courses to give you a Revival of Revenue" seoDescription="Pre-order PK's book today to learn how you can start maximizing your time and earning more money!" seoImage={'https://portal.revrevdev.xyz/wp-content/uploads/2022/07/online-education-1920x1080-1.jpg'}>
         <Navbar changeCart={openCart => setOpenCart(openCart)} viewCart={openCart} />
                          <div className={`preorder-btn-container ${loadPreorder}`}>
                {true == loadPreorder
                            ? (
                              <>
                              {loadDetails === true ? (


                                <>
                                    {"sub" in details ? (
                                      <>
                                       <div onClick={preHide} class='close-preorder'>X</div>
                                       <div className='course-subhead'>{details.sub}</div>
                                       <div className='course-infobuy singledisplay'>{details.title}</div>
                                       <div class='course-singledisplay-cont revmap'>
                                           <div class='course-singledisplay-left'>
                   
                                               <div dangerouslySetInnerHTML={sanitizedData(details.desc)} className='course-infocontent'></div>
                                               {addedToCarts.includes(details.cart.i) === true ? (
                                                       <div onClick={closePreviewOpenCart} className='course-addedtocart'>Checkout</div>
                                                   ): (
                                                       <div class='popup-buttons'>
                                                       <button onClick={SimpleCart} data-img={details.img} data-cartid={details.cart.i} data-price={details.price} data-name={details.title} class='popup-quickadd'>Quick Add</button>
                                                       <button onClick={() => buyNow({i: details.cart.i, q: 1, p: details.price, t: details.price})} class='popup-buynow'>Buy Me!</button>
                                           </div>
                                                   )}
                                               
                                           </div>
                                           <div class='course-singledisplay-right'>
                                           <div class='coursebox-imagesqaure-cont'>
                                                       <div style={Object.assign({'background-image': `url(${details.img})` })} class='courseboximgsquare'></div>
                                                   </div>
                                               
                                           </div>
                                             
                                              
                                       </div>
                                          </>         
                                    ):(
                                      <><div class='loading-bought'></div></>
                                    )}

                                                     


                                </>
                              ) : (
                                <Elements stripe={stripePromise}>
                                <div onClick={preHide} class='close-preorder'>X</div>
                              <StepSix button={'Pay'} cart={cartItem} header={'checkout'} subheader={""} success={["1. Please check your email for more details on your order. Go to your ", <a href={'/orders'}>Order Page</a>, " to see your orders."]} />  
                              </Elements>
                              )}




                              </>
                              )
                            : ""}
      </div>
      <div className='sub-list'>
       
        {loadingCourses === true ? (
          <div class='load-false coursesection'></div>
        ): (
          <>
         {courseData?.owned?.length > 0 ? (
          <CourseOverview sectionImg={''} sectionTitle={'All My Courses'} sectionDescription={'Continue where you left off on your unlocked courses'} cat='all' courseData={courseData.owned} />
         ) :
          ( null)}
         
          {"espresso" in courseData ? (
            <>
               <div className='course-subhead'>Daily Content</div>
                    <div className='course-infobuy singledisplay'>Entrepreneurial Espresso</div>
                    <div className={`espresso-cont espresso-${loggedIn}`}>
                      <a target={loggedIn === true ? '_blank' : ''} rel="noreferrer noopener" href={loggedIn === true ? courseData.espresso.pos1u : '#'} className="esspresso-item-cont">
                          <img src={courseData.espresso.pos1i}  class='espresso-img-item'></img>
                          <h4 className="espresso-item-title">{courseData.espresso.pos1t}</h4>
                      </a>      
                      <a target={loggedIn === true ? '_blank' : ''} rel="noreferrer noopener" href={loggedIn === true ? courseData.espresso.pos2u : '#'} className="esspresso-item-cont">
                          <img src={courseData.espresso.pos2i}  class='espresso-img-item'></img>
                          <h4 className="espresso-item-title">{courseData.espresso.pos2t}</h4>
                      </a>      
                      <a target={loggedIn === true ? '_blank' : ''} rel="noreferrer noopener" href={loggedIn === true ? courseData.espresso.pos3u : '#'} className="esspresso-item-cont">
                          <img src={courseData.espresso.pos3i}  class='espresso-img-item'></img>
                          <h4 className="espresso-item-title">{courseData.espresso.pos3t}</h4>
                      </a>      
                  </div>
                  {loggedIn === true ? (
                      <></>
                  ): (
                    <>
                      <div class='espresso-cta'>Log in to access this exclusive FREE Entrepreneurial Espresso content</div>
                      <a target="_blank" rel="noreferrer noopener" href={'/log-in'} className="course-btn">Login</a>
                    </>
                  )}
            </>
          ): (
            <></>
          )}

          {courseData?.available?.length > 0 ? (
            <>



              <RevRevCourseSmallList changeCartVis={openCart => setOpenCart(openCart)} preReveal={preReveal} prePreReveal={prePreReveal} changeCart={cartItem => setCartItem(cartItem)} courseData={courseData} changeDetails={detailItem => setDetails(detailItem)} />
              {/* <RevMapCourseSmallList changeCartVis={openCart => setOpenCart(openCart)} preReveal={preReveal} changeCart={cartItem => setCartItem(cartItem)} courseData={courseData} /> */}
              
              <RevMiniCourseSmallList changeCartVis={openCart => setOpenCart(openCart)} preReveal={preReveal} prePreReveal={prePreReveal} changeCart={cartItem => setCartItem(cartItem)} courseData={courseData} changeDetails={detailItem => setDetails(detailItem)} />
                    <div className='course-subhead'>PK Daily</div> 
                    <div className='course-infobuy singledisplay'>Entrepreneurial Challenge</div>
                    <div class='challenge-cont'>
                    <div class='unlockedcourse-header'>
                      <h1 class="challenge-page-header">Unlock access to exclusive challenges<span><button>Get Access</button></span></h1>
                    </div>
                    </div>
            </>
          ):<div class='empty-courses'>No more courses available at this time. Check back soon!</div>}
          </>
        )}
         
      </div>
      </Layout>
    );

  }





  const StepSix = (props) => {

    const [currentStep, setCurrentStep] = useState(1);
    const setAuth = (authData) => {
      localStorage.setItem("auth", JSON.stringify(authData));
    };


      const stripe = useStripe();
      const elements = useElements();
      const isBrowser = typeof window !== "undefined";
      const [succeeded, setSucceeded] = useState(false);
      const [error, setError] = useState(null)
      const [processing, setProcessing] = useState("");
      const [methodProcessing, setMethodProcessing] = useState(true);
      const [doneLoading, setDoneLoading] = useState(false);
      const [disabled, setDisabled] = useState(true);
      const [parsedShippingData, setParsedShippingData] = useState([])

      const [addressDisabled, setAddressDisabled] = useState(false)
      const nameForm = useRef(null);
      const [status, setStatus] = useState(0);
      let newA = [];
      const [arrayTest, setArray] = useState({});
      const [shippingData, setShippingData] = useState('');
      const [prevExpY, setPrevExpY] = useState("");
      const [prevExpM, setPrevExpM] = useState("");
      const [prevName, setPrevName] = useState("");
      const [prevEmail, setPrevEmail] = useState("");
      const [prevBrand, setPrevBrand] = useState("");
      const [prevPaymentID, setPrevID] = useState(""); //previous payment ID.
      const [prevLast4, setLast4] = useState("");
      const [clickedItem, setClickedItem] = useState(0);
      const [clickedAddress, setClickedAddress] = useState(-1);
      const [firstDisabled, setFirstDisabled] = useState(false);
      const [country, setCountry] = useState([{
        name: 'United States of America',
        code: 'US'
      }]);    
  const optionsC = [ 
          {name: 'Afghanistan', code: 'AF'}, 
          {name: 'Åland Islands', code: 'AX'}, 
          {name: 'Albania', code: 'AL'}, 
          {name: 'Algeria', code: 'DZ'}, 
          {name: 'American Samoa', code: 'AS'}, 
          {name: 'AndorrA', code: 'AD'}, 
          {name: 'Angola', code: 'AO'}, 
          {name: 'Anguilla', code: 'AI'}, 
          {name: 'Antarctica', code: 'AQ'}, 
          {name: 'Antigua and Barbuda', code: 'AG'}, 
          {name: 'Argentina', code: 'AR'}, 
          {name: 'Armenia', code: 'AM'}, 
          {name: 'Aruba', code: 'AW'}, 
          {name: 'Australia', code: 'AU'}, 
          {name: 'Austria', code: 'AT'}, 
          {name: 'Azerbaijan', code: 'AZ'}, 
          {name: 'Bahamas', code: 'BS'}, 
          {name: 'Bahrain', code: 'BH'}, 
          {name: 'Bangladesh', code: 'BD'}, 
          {name: 'Barbados', code: 'BB'}, 
          {name: 'Belarus', code: 'BY'}, 
          {name: 'Belgium', code: 'BE'}, 
          {name: 'Belize', code: 'BZ'}, 
          {name: 'Benin', code: 'BJ'}, 
          {name: 'Bermuda', code: 'BM'}, 
          {name: 'Bhutan', code: 'BT'}, 
          {name: 'Bolivia', code: 'BO'}, 
          {name: 'Bosnia and Herzegovina', code: 'BA'}, 
          {name: 'Botswana', code: 'BW'}, 
          {name: 'Bouvet Island', code: 'BV'}, 
          {name: 'Brazil', code: 'BR'}, 
          {name: 'British Indian Ocean Territory', code: 'IO'}, 
          {name: 'Brunei Darussalam', code: 'BN'}, 
          {name: 'Bulgaria', code: 'BG'}, 
          {name: 'Burkina Faso', code: 'BF'}, 
          {name: 'Burundi', code: 'BI'}, 
          {name: 'Cambodia', code: 'KH'}, 
          {name: 'Cameroon', code: 'CM'}, 
          {name: 'Canada', code: 'CA'}, 
          {name: 'Cape Verde', code: 'CV'}, 
          {name: 'Cayman Islands', code: 'KY'}, 
          {name: 'Central African Republic', code: 'CF'}, 
          {name: 'Chad', code: 'TD'}, 
          {name: 'Chile', code: 'CL'}, 
          {name: 'China', code: 'CN'}, 
          {name: 'Christmas Island', code: 'CX'}, 
          {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
          {name: 'Colombia', code: 'CO'}, 
          {name: 'Comoros', code: 'KM'}, 
          {name: 'Congo', code: 'CG'}, 
          {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
          {name: 'Cook Islands', code: 'CK'}, 
          {name: 'Costa Rica', code: 'CR'}, 
          {name: 'Cote D\'Ivoire', code: 'CI'}, 
          {name: 'Croatia', code: 'HR'}, 
          {name: 'Cuba', code: 'CU'}, 
          {name: 'Cyprus', code: 'CY'}, 
          {name: 'Czech Republic', code: 'CZ'}, 
          {name: 'Denmark', code: 'DK'}, 
          {name: 'Djibouti', code: 'DJ'}, 
          {name: 'Dominica', code: 'DM'}, 
          {name: 'Dominican Republic', code: 'DO'}, 
          {name: 'Ecuador', code: 'EC'}, 
          {name: 'Egypt', code: 'EG'}, 
          {name: 'El Salvador', code: 'SV'}, 
          {name: 'Equatorial Guinea', code: 'GQ'}, 
          {name: 'Eritrea', code: 'ER'}, 
          {name: 'Estonia', code: 'EE'}, 
          {name: 'Ethiopia', code: 'ET'}, 
          {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
          {name: 'Faroe Islands', code: 'FO'}, 
          {name: 'Fiji', code: 'FJ'}, 
          {name: 'Finland', code: 'FI'}, 
          {name: 'France', code: 'FR'}, 
          {name: 'French Guiana', code: 'GF'}, 
          {name: 'French Polynesia', code: 'PF'}, 
          {name: 'French Southern Territories', code: 'TF'}, 
          {name: 'Gabon', code: 'GA'}, 
          {name: 'Gambia', code: 'GM'}, 
          {name: 'Georgia', code: 'GE'}, 
          {name: 'Germany', code: 'DE'}, 
          {name: 'Ghana', code: 'GH'}, 
          {name: 'Gibraltar', code: 'GI'}, 
          {name: 'Greece', code: 'GR'}, 
          {name: 'Greenland', code: 'GL'}, 
          {name: 'Grenada', code: 'GD'}, 
          {name: 'Guadeloupe', code: 'GP'}, 
          {name: 'Guam', code: 'GU'}, 
          {name: 'Guatemala', code: 'GT'}, 
          {name: 'Guernsey', code: 'GG'}, 
          {name: 'Guinea', code: 'GN'}, 
          {name: 'Guinea-Bissau', code: 'GW'}, 
          {name: 'Guyana', code: 'GY'}, 
          {name: 'Haiti', code: 'HT'}, 
          {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
          {name: 'Holy See (Vatican City State)', code: 'VA'}, 
          {name: 'Honduras', code: 'HN'}, 
          {name: 'Hong Kong', code: 'HK'}, 
          {name: 'Hungary', code: 'HU'}, 
          {name: 'Iceland', code: 'IS'}, 
          {name: 'India', code: 'IN'}, 
          {name: 'Indonesia', code: 'ID'}, 
          {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
          {name: 'Iraq', code: 'IQ'}, 
          {name: 'Ireland', code: 'IE'}, 
          {name: 'Isle of Man', code: 'IM'}, 
          {name: 'Israel', code: 'IL'}, 
          {name: 'Italy', code: 'IT'}, 
          {name: 'Jamaica', code: 'JM'}, 
          {name: 'Japan', code: 'JP'}, 
          {name: 'Jersey', code: 'JE'}, 
          {name: 'Jordan', code: 'JO'}, 
          {name: 'Kazakhstan', code: 'KZ'}, 
          {name: 'Kenya', code: 'KE'}, 
          {name: 'Kiribati', code: 'KI'}, 
          {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
          {name: 'Korea, Republic of', code: 'KR'}, 
          {name: 'Kuwait', code: 'KW'}, 
          {name: 'Kyrgyzstan', code: 'KG'}, 
          {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
          {name: 'Latvia', code: 'LV'}, 
          {name: 'Lebanon', code: 'LB'}, 
          {name: 'Lesotho', code: 'LS'}, 
          {name: 'Liberia', code: 'LR'}, 
          {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
          {name: 'Liechtenstein', code: 'LI'}, 
          {name: 'Lithuania', code: 'LT'}, 
          {name: 'Luxembourg', code: 'LU'}, 
          {name: 'Macao', code: 'MO'}, 
          {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
          {name: 'Madagascar', code: 'MG'}, 
          {name: 'Malawi', code: 'MW'}, 
          {name: 'Malaysia', code: 'MY'}, 
          {name: 'Maldives', code: 'MV'}, 
          {name: 'Mali', code: 'ML'}, 
          {name: 'Malta', code: 'MT'}, 
          {name: 'Marshall Islands', code: 'MH'}, 
          {name: 'Martinique', code: 'MQ'}, 
          {name: 'Mauritania', code: 'MR'}, 
          {name: 'Mauritius', code: 'MU'}, 
          {name: 'Mayotte', code: 'YT'}, 
          {name: 'Mexico', code: 'MX'}, 
          {name: 'Micronesia, Federated States of', code: 'FM'}, 
          {name: 'Moldova, Republic of', code: 'MD'}, 
          {name: 'Monaco', code: 'MC'}, 
          {name: 'Mongolia', code: 'MN'}, 
          {name: 'Montserrat', code: 'MS'}, 
          {name: 'Morocco', code: 'MA'}, 
          {name: 'Mozambique', code: 'MZ'}, 
          {name: 'Myanmar', code: 'MM'}, 
          {name: 'Namibia', code: 'NA'}, 
          {name: 'Nauru', code: 'NR'}, 
          {name: 'Nepal', code: 'NP'}, 
          {name: 'Netherlands', code: 'NL'}, 
          {name: 'Netherlands Antilles', code: 'AN'}, 
          {name: 'New Caledonia', code: 'NC'}, 
          {name: 'New Zealand', code: 'NZ'}, 
          {name: 'Nicaragua', code: 'NI'}, 
          {name: 'Niger', code: 'NE'}, 
          {name: 'Nigeria', code: 'NG'}, 
          {name: 'Niue', code: 'NU'}, 
          {name: 'Norfolk Island', code: 'NF'}, 
          {name: 'Northern Mariana Islands', code: 'MP'}, 
          {name: 'Norway', code: 'NO'}, 
          {name: 'Oman', code: 'OM'}, 
          {name: 'Pakistan', code: 'PK'}, 
          {name: 'Palau', code: 'PW'}, 
          {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
          {name: 'Panama', code: 'PA'}, 
          {name: 'Papua New Guinea', code: 'PG'}, 
          {name: 'Paraguay', code: 'PY'}, 
          {name: 'Peru', code: 'PE'}, 
          {name: 'Philippines', code: 'PH'}, 
          {name: 'Pitcairn', code: 'PN'}, 
          {name: 'Poland', code: 'PL'}, 
          {name: 'Portugal', code: 'PT'}, 
          {name: 'Puerto Rico', code: 'PR'}, 
          {name: 'Qatar', code: 'QA'}, 
          {name: 'Reunion', code: 'RE'}, 
          {name: 'Romania', code: 'RO'}, 
          {name: 'Russian Federation', code: 'RU'}, 
          {name: 'RWANDA', code: 'RW'}, 
          {name: 'Saint Helena', code: 'SH'}, 
          {name: 'Saint Kitts and Nevis', code: 'KN'}, 
          {name: 'Saint Lucia', code: 'LC'}, 
          {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
          {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
          {name: 'Samoa', code: 'WS'}, 
          {name: 'San Marino', code: 'SM'}, 
          {name: 'Sao Tome and Principe', code: 'ST'}, 
          {name: 'Saudi Arabia', code: 'SA'}, 
          {name: 'Senegal', code: 'SN'}, 
          {name: 'Serbia and Montenegro', code: 'CS'}, 
          {name: 'Seychelles', code: 'SC'}, 
          {name: 'Sierra Leone', code: 'SL'}, 
          {name: 'Singapore', code: 'SG'}, 
          {name: 'Slovakia', code: 'SK'}, 
          {name: 'Slovenia', code: 'SI'}, 
          {name: 'Solomon Islands', code: 'SB'}, 
          {name: 'Somalia', code: 'SO'}, 
          {name: 'South Africa', code: 'ZA'}, 
          {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
          {name: 'Spain', code: 'ES'}, 
          {name: 'Sri Lanka', code: 'LK'}, 
          {name: 'Sudan', code: 'SD'}, 
          {name: 'Suriname', code: 'SR'}, 
          {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
          {name: 'Swaziland', code: 'SZ'}, 
          {name: 'Sweden', code: 'SE'}, 
          {name: 'Switzerland', code: 'CH'}, 
          {name: 'Syrian Arab Republic', code: 'SY'}, 
          {name: 'Taiwan, Province of China', code: 'TW'}, 
          {name: 'Tajikistan', code: 'TJ'}, 
          {name: 'Tanzania, United Republic of', code: 'TZ'}, 
          {name: 'Thailand', code: 'TH'}, 
          {name: 'Timor-Leste', code: 'TL'}, 
          {name: 'Togo', code: 'TG'}, 
          {name: 'Tokelau', code: 'TK'}, 
          {name: 'Tonga', code: 'TO'}, 
          {name: 'Trinidad and Tobago', code: 'TT'}, 
          {name: 'Tunisia', code: 'TN'}, 
          {name: 'Turkey', code: 'TR'}, 
          {name: 'Turkmenistan', code: 'TM'}, 
          {name: 'Turks and Caicos Islands', code: 'TC'}, 
          {name: 'Tuvalu', code: 'TV'}, 
          {name: 'Uganda', code: 'UG'}, 
          {name: 'Ukraine', code: 'UA'}, 
          {name: 'United Arab Emirates', code: 'AE'}, 
          {name: 'United Kingdom', code: 'GB'}, 
          {name: 'United States of America', code: 'US'}, 
          {name: 'United States Minor Outlying Islands', code: 'UM'}, 
          {name: 'Uruguay', code: 'UY'}, 
          {name: 'Uzbekistan', code: 'UZ'}, 
          {name: 'Vanuatu', code: 'VU'}, 
          {name: 'Venezuela', code: 'VE'}, 
          {name: 'Viet Nam', code: 'VN'}, 
          {name: 'Virgin Islands, British', code: 'VG'}, 
          {name: 'Virgin Islands, U.S.', code: 'VI'}, 
          {name: 'Wallis and Futuna', code: 'WF'}, 
          {name: 'Western Sahara', code: 'EH'}, 
          {name: 'Yemen', code: 'YE'}, 
          {name: 'Zambia', code: 'ZM'}, 
          {name: 'Zimbabwe', code: 'ZW'} 
        ]
  const customNoDataRenderer = () => (
        <div className='no-country'>No country found</div>
      );
      
      const email = function() {
        try {
          return JSON.parse(localStorage.auth).authToken;
        } catch {
          return null;
        }
      }
      const [checked, setChecked] = useState(true);
      const [addressChecked, setAddressChecked] = useState(true);
      const [addressCheckHidden, setAddressCheckHidden] = useState('');
      const handleCheck = () => {
        setChecked(!checked);
      };
      const handleAddressCheck = () => {
        setAddressChecked(!checked);
      };
      useEffect(() => {
        async function fetchMyAPI() {
          console.log('start here')
          if (email() == null) {
            // setAccount(true)
            // setCard(true)
            // radioHandler(1)
            
            radioHandler(1)
            setDoneLoading(true)
            console.log('its not here')
          } else {
          try {
            // Retrieve email and username of the currently logged in user.
            // getUserFromDB() is *your* implemention of getting user info from the DB
            const request = await fetch('/api/get-payment', {
              method: 'POST',
              body: email(),
            });
            const intent = (await request.json());
            console.log(intent)
            if (intent =='') {
        
              setDoneLoading(true)
              radioHandler(1)
              return;
            }
            if (intent.paymentMethod.data.length < 1) {
              setDoneLoading(true)
              radioHandler(1)
              return;
            }
            setArray(intent.paymentMethod.data);
            setShippingData(intent.address);

        
      
            console.log(intent)
            
            // Update your user in DB to store the customerID
            // updateUserInDB() is *your* implementation of updating a user in the DB
              setDisabled(false)
              setPrevID(intent.paymentMethod.data[0].id);
              setLast4(intent.paymentMethod.data[0].card.last4);
              setPrevExpY((intent.paymentMethod.data[0].card.exp_year).toString().slice(-2));
              setPrevExpM(('0' + intent.paymentMethod.data[0].card.exp_month.toString()).toString().slice(-2));
              setPrevName(intent.paymentMethod.data[0].billing_details.name);
              setPrevEmail(intent.paymentMethod.data[0].billing_details.email);
              setPrevBrand(intent.paymentMethod.data[0].card.brand);
              setMethodProcessing(false)
              setDoneLoading(true)
            return intent;
            
          } catch (error) {
            console.log('Failed to get cID');
            console.log(error);
            return null;
          }
        }
        }
        fetchMyAPI()
      }, []);
      if (isBrowser) console.log(arrayTest);


      const radioHandler = (status) => {
        setStatus(status);
      };

      const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
        //if nameform ref name is 4+ characters and email is valid, do this. else don't do this.
      };

      
    const handleSubmit = async (ev) => {
      const form = nameForm.current
      const email = form['email'].value 
      ev.preventDefault();
      setProcessing(true);
      const intent = await createIntent(email);
      console.log(intent)
      let payload;
      if (status===0) {
        payload = await stripe.confirmCardPayment(intent.client_secret, {
          payment_method: prevPaymentID,
        
        });
      } else {
        payload = await stripe.confirmCardPayment(intent.client_secret, {
        
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name:  form['firstname'].value,
              email: form['email'].value,
            }
          },
        });
      }


      if (payload.error) {
        setCurrentStep(1)

        setError(`${payload.error.message}`);
        setProcessing(false);
      } else {
        console.log(payload.paymentIntent)
        setError(null);
          setProcessing(false);
          setSucceeded(true);
      //   const verifyIntent = await intentVerify(payload.paymentIntent.id, email);
      //   console.log(verifyIntent)
      //   if (verifyIntent.new === true) {
      //     const authData = {
      //       authToken: verifyIntent.newUser,
      //       user: {email: email},
      //     };
      //     setAuth(authData);
      //     setError(null);
      //     setProcessing(false);
      //     setSucceeded(true);
      //     navigate('/success')
      //     props.changeStatus('succeeded')
      //   }


      //   if (verifyIntent === true) {
      //     setError(null);
      //     setProcessing(false);
      //     setSucceeded(true);
      //     navigate('/success')
      //     props.changeStatus('succeeded')

      //   } 

      }
    };

      async function createIntent(newEmail) {
        try {

          let ex = {
            //token: tokenGet(),
            //cart: JSON.parse(localStorage.cart),
            'cart': props.cart,
            'email': newEmail,
          }
          localStorage.setItem('verify', newEmail)
          const request = await fetch('https://portal.revrevdev.xyz/wp-json/rev-process/new', {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(ex),
          });
          const intent = (await request.json());
          console.log(intent)
          return intent;
        } catch (error1) {
          console.log('Failed to create intent');
          console.log(error1);
          return null;
        }
      }

      const newCardButton = () => {
        radioHandler(1)
        if (firstDisabled === false) {
          setDisabled(true)
          setFirstDisabled(true)
        }

      }


      const prevStep = () => {
        setCurrentStep(1)
      }
      const cancelPayment = () => {
        props.changeStatus('canceled')
      }

      const getButtonId = (e) => {
        setDisabled(false)
        radioHandler(0)
        setClickedItem(parseInt(e.target.dataset.idindex));
        setPrevID(e.target.dataset.id);
        setLast4(e.target.dataset.last4);
        setPrevExpY((e.target.dataset.year).toString().slice(-2));
        setPrevExpM(('0' + e.target.dataset.month.toString()).toString().slice(-2));
        setPrevName(e.target.dataset.prevname);
        setPrevEmail(e.target.dataset.prevemail);
        setPrevBrand(e.target.dataset.brand);
      }
    const cardStyle = {
      style: {
        base: {
          color: "#fff",
          iconColor: "#fff",
          fontFamily: "Arial, sans-serif",
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#9e9e9e",
          },
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a",
        },
      },
    };
  //onClick={(e) => radioHandler(0)}
  // (el.card.exp_year).toString().slice(-2)
  // ('0' + el.card.exp_month.toString()).toString().slice(-2)

  const noShippingForm = () => {


  return (
    <>
    {props.optional === true ?
    (
  <div className='paybtn-cont'>
  <div onClick={cancelPayment} className={`next-btn stepback`}>
        <span id="button-text">
          No thanks
        </span>
      </div>
    <button className='pay-btn' disabled={processing || disabled || succeeded} id="submit">
    <span id="button-text">
      {processing ? (
        <div className="spinner" id="spinner">{props.button}</div>
      ) : (
        `${props.button}`
      )}
    </span>
  </button>
  </div>
    ):
  (
    <div className='paybtn-cont'>
    <button className='pay-btn' disabled={processing || disabled || succeeded} id="submit">
    <span id="button-text">
      {processing ? (
        <div className="spinner" id="spinner">{props.button}</div>
      ) : (
        `${props.button}`
      )}
    </span>
  </button>
  </div>
  )

  }
  </>
  )
  }


  const addressClick = (e) => {
  
    setClickedAddress(parseInt(e.target.dataset.idindex));
    document.getElementById("ship-name").value = e.target.dataset.first_name;
    document.getElementById("ship-address1").value = e.target.dataset.address_1;
    document.getElementById("ship-address2").value = e.target.dataset.address_2;
    document.getElementById("ship-city").value = e.target.dataset.city;
    document.getElementById("ship-state").value = e.target.dataset.state;
    document.getElementById("ship-zip").value = e.target.dataset.postcode;
    setCountry([{
      name: 'United States of America',
      code: e.target.dataset.country
    }])
    setAddressCheckHidden('-hide')
    console.log('dd')

    setAddressDisabled(true)
  }

  const newAddressButton = () => {
    setClickedAddress(-1)
    document.getElementById("ship-name").value = '';
    document.getElementById("ship-address1").value ='';
    document.getElementById("ship-address2").value = '';
    document.getElementById("ship-city").value = '';
    document.getElementById("ship-state").value = '';
    document.getElementById("ship-zip").value = '';
    setCountry([{
      name: 'United States of America',
      code: 'US'
    }])
    setAddressCheckHidden('')
    setAddressDisabled(false)

  }
  const drawShippingForm = () => {


  console.log(parsedShippingData)
    return (
      <div className='shipping-form-data'>
  <div class='shipping-info'>Shipping Info</div>
      {parsedShippingData.length === 0 ? (
        <></>
      ) : (
        <div class={`selection-address-form`}>
        {parsedShippingData.map((el, index) =>
              <React.Fragment key={index}>
              <div data-address_1={el.address_1} data-address_2={el.address_2} data-city={el.city} data-country={el.country} data-first_name={el.first_name} data-postcode={el.postcode} data-state={el.state} onClick={addressClick} data-idindex={index} className={index === clickedAddress ? "previous-address is-checked" : "previous-address"}>
              <div className="prev-address-1">{el.address_1}</div>
    
              </div>
            </React.Fragment>
      )}
      <div onClick={newAddressButton} className={`new-address${addressCheckHidden}`}>+ New Address</div>
        </div>
      )}



      <div className="ship-name">

      <input disabled={addressDisabled} id="ship-name" required className={'form-control form-control'} placeholder="First and last name" autocomplete="shipping name" name={'name'}/>
      </div>
      <label>Street Address</label>
      <div className="ship-street">

      <input disabled={addressDisabled} id="ship-address1" required className={'form-control form-control'} placeholder="Street and number" autocomplete="shipping address-line1" name={'ship-address1'}/>
      <input disabled={addressDisabled} id="ship-address2" className={'form-control form-control'} placeholder="Apartment, suite, unit, etc (optional)" autocomplete="shipping address-line2" name={'ship-address2'}/>
      </div>
      <label>City / State</label>
      <div  className="ship-citystate">

      <input disabled={addressDisabled} id="ship-city" required className={'form-control form-control'} placeholder="City" name="ship-city" autocomplete="shipping address-level2"/>
      <input disabled={addressDisabled} id="ship-state" required className={'form-control form-control'} placeholder="State / Province" name="ship-state" autocomplete="shipping address-level1"/>
      </div>
      <label>Zip Code / Country</label>
      <div className="ship-zipcountry">
      <input disabled={addressDisabled} id="ship-zip" required className={'form-control form-control'} placeholder="Zip / Postal Code" autocomplete="shipping postal-code" name={'ship-zip'}/>
      <Select
      options={optionsC} 
      labelField="name"
      valueField="code"
      name="ship-country"
      id="ship-country" 
      dropdownPosition="top"
      searchBy="name"
      required
      disabled={addressDisabled}
      closeOnSelect={true}
      values={country}
      noDataRenderer={customNoDataRenderer}
      onChange={values => setCountry(values)}
    />

    </div>
    <label className={`save-payment${addressCheckHidden}`}>
      <input type="checkbox" checked={addressChecked} onChange={(event) => setAddressChecked(event.currentTarget.checked)} />
      Save Address
    </label>
      <div className='paybtn-cont'>
      <div onClick={prevStep} className={`next-btn stepback`}>
        <span id="button-text">
          Back
        </span>
      </div>
      <button className='pay-btn' disabled={processing || disabled || succeeded} id="submit">
            <span id="button-text">
              {processing ? (
                <div className="spinner" id="spinner">{props.button}</div>
              ) : (
                `${props.button}`
              )}
            </span>
          </button>
      </div>

      </div>
    )

  } 


      return (
        <div className={`payment register-form col-md-6 status-${status} load-${doneLoading} step-${currentStep} success-${succeeded}`}>
            <h2>{props.header}</h2>
            {email() === null ? (
              <div class='login-msg'>Already have a account? <a href={'/log-in'}>Log In.</a></div>
            ):''}
            <h3>{props.subheader}</h3>
            <div class={props.content == '' ? 'payment-area-cont no-content': 'payment-area-cont'}>
        
              <div class='payment-area-pay-checkout'>
                <div class='pay-with-card'>Pay With Card</div>
          {methodProcessing ? (
                <></>
              ) : (
                <div class={`selection-section`}>
              {arrayTest && arrayTest.map((el, index) =>
                      <React.Fragment key={index}>
                      <div data-id={el.id} data-month={el.card.exp_month} data-year={el.card.exp_year} data-brand={el.card.brand} data-last4={el.card.last4} data-prevname={el.billing_details.name} data-prevemail={el.billing_details.email} onClick={getButtonId} data-idindex={index} className={index === clickedItem ? "previous-payment is-checked" : "previous-payment"}>
                      <div className={`prev-brand ${el.card.brand}`}></div>
                      <div className="prev-last4">{el.card.last4}</div>

        </div>
                      </React.Fragment>
  )}
  <div onClick={newCardButton} className={`new-payment`}>+ New Card</div>
                </div>
                )}
        <form id="payment-form" ref={nameForm} onSubmit={handleSubmit}>
        <div className='powered-container'>
          <div className='powered-by-stripe'></div>
          </div>
          <div className='new-card-form'>
          <InputField2 label={'email'} name={'email'}/>
          <input className={'form-control form-control'} placeholder="Name on Card" name={'firstname'}/>
          <CardElement
            id="card-element"
            options={cardStyle}
            onChange={handleChange}
          />
          
          <label className="save-payment">
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      Save payment method
    </label>
          </div>
  
          <div className='payment-infos'>
            <div className="prev-name-on-card">{prevName}</div>
            <div className="prev-email">{prevEmail}</div> 
            <div className='prev-last-box'>
              <div className="brand-last4"><div className={"prev-brand " + prevBrand}></div><div className="prev-last4">**** {prevLast4}</div></div><div className="prev-expiry">{prevExpM}/{prevExpY}</div>
            </div>
          </div>

          <>
        {noShippingForm()}
          </>
          <div className='powered-by-stripe-small'></div>
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
        <div className={"result-message"}>
        <div className='result-message-success'>Payment succeeded!</div>
        <p className='result-message-text'>{props.success}</p>
        </div>
          
        </form>
        </div>
        </div>
        </div>
      );

    }
