import React, { useState, useRef, useEffect } from 'react';
    import {loadStripe} from '@stripe/stripe-js/pure';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js'; 
  import { isEmpty } from 'lodash';
 
  import InputField2 from '../components/inputfield';
  import Select from "react-dropdown-select";

export default function Checkout() {
const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))
   
const [loading, setLoading] = useState(false);
const [cartRender, setCartRender] = useState(true);
const isBrowser = typeof window !== "undefined";
const couponForm = useRef(null);
useEffect(() => {
    document.addEventListener("itemInserted", localStorageSetHandler, false);
    if (isBrowser) window.addEventListener("storage", reRender, false);
  
}, []);


const reRender = () => {
    console.log('rerender')
    let tempCart = function() {
        try {
        return JSON.parse(localStorage.cart)
        } catch {return []}
    }
    const setLocal = function(key, value) {
         
        localStorage.setItem(key, value);
        const event = new Event('itemInserted');
      
        document.dispatchEvent(event);
     
      };
      setLocal('cart', JSON.stringify(tempCart()))
      if (cartRender===true) {
        setCartRender(false)
      } else {
        setCartRender(true)
      }
}
const localStorageSetHandler = () => {

    console.log('triggered')
    let tempCart = function() {
        try {
        return JSON.parse(localStorage.cart)
        } catch {return []}
    }
    let subtotal = 0;
    let finalsub = ''
    tempCart().forEach((tempitem, index) => {
      subtotal += tempitem.total
    })
    if (!subtotal.toString().includes('.')) {
      finalsub = subtotal.toString() + '.00'
    } else {
      finalsub = subtotal.toString()
    }
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
          <div class="cart-cont"><img class="cart-img" height="82" width="82" src={el.url}/><div class="name-total-cart-cont"><div class="cart-name">{el.name}</div><div class="cart-item-total">{el.quantity} × {(el.price).toLocaleString('en-US', {style: 'currency', currency: 'USD',})}</div>{el.code == undefined ? <></> : <div class="cart-item-total cpon">{el.cquantity} × {(el.cprice).toLocaleString('en-US', {style: 'currency', currency: 'USD',})} <span>{el.code}</span></div>}</div>  <div data-index={index} onClick={removeFromCart} class="remove-cart-item">X</div></div>
          )}
          </div>
          <div class='cart-divider'></div>
          <div class='cart-subtotal-cont'>
            <div class='cart-subtotal-text'>Shipping & taxes calculated at checkout</div>
            <div class='cart-subtotal-amount'>Subtotal ${finalsub}</div>
          </div>
          </>
        )
      }
}



async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    const form = couponForm.current
    const couponCode = form['coupon'].value 

    let ex = {
        cart: JSON.parse(localStorage.cart),
        code:couponCode
    }
    const request = await fetch('/api/check-coupon', {
        method: 'POST',
        body: JSON.stringify(ex),
      });
      const intent = (await request.json());
      setLoading(false)
      if (intent.success === true) {
        const setLocal = function(key, value) {
         
            localStorage.setItem(key, value);
            const event = new Event('itemInserted');
          
            document.dispatchEvent(event);
         
          };
      
          setLocal('cart', JSON.stringify(intent.newCart))
          if (cartRender===true) {
            setCartRender(false)
          } else {
            setCartRender(true)
          }
      }
      console.log(intent)
}

  return (
    <div class='checkout-page'>
        <div class='checkout-header-bar'></div>
        <div class='checkout-form-section'>
        <Elements stripe={stripePromise}>
        <StepSix button={'Pay'} content={'aa'} header={'checkout'} subheader={"a"} shipping={true} success={["1. Please check your email for more details on your order. Go to your ", <a href={'/orders'}>Order Page</a>, " to see your orders."]} /> 
        </Elements>
        </div>
        <div class='checkout-cart-section'>
            <div class='checkout-cart-cont'>{localStorageSetHandler()}</div>
            <div class='coupon-section'>
                <form ref={couponForm} onSubmit={handleSubmit}>
                <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="coupon-entry">Coupon</label>
                    <input
                    id="coupon-entry"
                    type="text"
                    name="coupon"
                    required
                    />
                    <button type="submit" disabled={loading}>
                    Apply Coupon
                    </button>
                </fieldset>
                </form>
            </div>
        </div>


  
    </div>
  )




  
}

const StepSix = (props) => {
    let [shipping, setShipping] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    if (props.shipping === true) {
       [shipping, setShipping] = useState(true);
    }



    const stripe = useStripe();
    const elements = useElements();
    const isBrowser = typeof window !== "undefined";
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState("");
    const [methodProcessing, setMethodProcessing] = useState(true);
    const [doneLoading, setDoneLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const nameForm = useRef(null);
    const [status, setStatus] = useState(0);
    let newA = [];
    const [arrayTest, setArray] = useState({});
    const [prevExpY, setPrevExpY] = useState("");
    const [prevExpM, setPrevExpM] = useState("");
    const [prevName, setPrevName] = useState("");
    const [prevEmail, setPrevEmail] = useState("");
    const [prevBrand, setPrevBrand] = useState("");
    const [prevPaymentID, setPrevID] = useState(""); //previous payment ID.
    const [prevLast4, setLast4] = useState("");
    const [clickedItem, setClickedItem] = useState(0);
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

    const handleCheck = () => {
      setChecked(!checked);
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
          console.log()
          
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
       payload = await stripe.confirmCardPayment(intent.paymentIntent.client_secret, {
        payment_method: prevPaymentID,
      
      });
    } else {
       payload = await stripe.confirmCardPayment(intent.paymentIntent.client_secret, {
       
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
      const verifyIntent = await intentVerify(payload.paymentIntent.id, email);
      console.log(verifyIntent)
      if (verifyIntent.new === true) {
        const authData = {
          authToken: verifyIntent.newUser,
          user: {email: email},
        };
        setAuth(authData);
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        props.changeStatus('succeeded')
      }


      if (verifyIntent === true) {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        props.changeStatus('succeeded')

      } 

    }
  };

    async function createIntent(newEmail) {
      let newAccuntEmail = null;
      try {
        let tokenGet = function() {
          let authTokenData = localStorage.getItem("auth");
          if (!isEmpty(authTokenData)) {
            authTokenData = JSON.parse(authTokenData);
            if (!isEmpty(authTokenData.authToken)) {
            return JSON.parse(localStorage.auth).authToken;
            } else {
              newAccuntEmail = newEmail
            return null;
            }
          } else {
            newAccuntEmail = newEmail
            return null;
          }
        }
        let ex = {
          token: tokenGet(),
          //cart: JSON.parse(localStorage.cart),
          cart: JSON.parse(localStorage.cart),
          newAccount: newAccuntEmail,
        }

        const request = await fetch('/api/intent-init', {
          method: 'POST',
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

    async function intentVerify(paymentIntent, newEmail) {
      const form = nameForm.current
      let newAccuntEmail = null;
      try {
        let tokenGet = function() {
          let authTokenData = localStorage.getItem("auth");
          if (!isEmpty(authTokenData)) {
            authTokenData = JSON.parse(authTokenData);
            if (!isEmpty(authTokenData.authToken)) {
            return JSON.parse(localStorage.auth).authToken;
            } else {
              newAccuntEmail = newEmail
            return null;
            }
          } else {
            newAccuntEmail = newEmail
            return null;
          }
        }
        let ex = {
          token: tokenGet(),
          //cart: JSON.parse(localStorage.cart),
          cart: JSON.parse(localStorage.cart),
          intent:paymentIntent,
          newAccount: newAccuntEmail,
          shippingData: null,
          metafield: "onedollar",
          metavalue: true,
          savePayment: checked,
        }

        if (shipping===true) {
          ex.shippingData = {
            shippingaddress1: form['ship-address1'].value,
            shippingaddress2: form['ship-address2'].value,
            accountemail: form['email'].value,
            shippingname: form['name'].value,
            shippingcity: form['ship-city'].value,
            shippingstate: form['ship-state'].value,
            shippingzip: form['ship-zip'].value,
            shippingcountry: country[0].code,
          }
        }

        const request = await fetch('/api/intent-verify', {
          method: 'POST',
          body: JSON.stringify(ex),
        });
        const intent = (await request.json());
        console.log(intent)
        return intent;
      } catch (error1) {
          console.log('Failed to verify intent');
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

    const nextStep = () => {
      setCurrentStep(2)
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
const drawShippingForm = () => {

  return (
    <div className='shipping-form-data'>
    <div className="ship-name">

    <input required className={'form-control form-control'} placeholder="First and last name" autocomplete="shipping name" name={'name'}/>
    </div>
    <label>Street Address</label>
    <div className="ship-street">

    <input required className={'form-control form-control'} placeholder="Street and number" autocomplete="shipping address-line1" name={'ship-address1'}/>
    <input className={'form-control form-control'} placeholder="Apartment, suite, unit, etc (optional)" autocomplete="shipping address-line2" name={'ship-address2'}/>
    </div>
    <label>City / State</label>
    <div className="ship-citystate">

    <input required className={'form-control form-control'} placeholder="City" name="ship-city" autocomplete="shipping address-level2"/>
    <input required className={'form-control form-control'} placeholder="State / Province" name="ship-state" autocomplete="shipping address-level1"/>
    </div>
    <label>Zip Code / Country</label>
    <div className="ship-zipcountry">
    <input required className={'form-control form-control'} placeholder="Zip / Postal Code" autocomplete="shipping postal-code" name={'ship-zip'}/>
    <Select
    options={optionsC} 
    labelField="name"
    valueField="code"
    name="ship-country" 
    dropdownPosition="top"
    searchBy="name"
    required
    closeOnSelect={true}
    values={country}
    noDataRenderer={customNoDataRenderer}
    onChange={values => setCountry(values)}
  />
  </div>
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
          <h3>{props.subheader}</h3>
          <div class={props.content == '' ? 'payment-area-cont no-content': 'payment-area-cont'}>
            <div class='payment-area-content'>{props.content}</div>
    
            <div class='payment-area-pay'>
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
        {shipping === true && (
                <div onClick={nextStep} className={`next-btn firststep-btn disabled-${disabled}`}>
                <span id="button-text">
                  Continue to Shipping
                </span>
              </div>
        )}

        {shipping === true && drawShippingForm()}
        {shipping === false && noShippingForm()}

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
