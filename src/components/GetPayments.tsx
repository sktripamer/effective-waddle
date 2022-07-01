import * as React from "react";
import {useState, useEffect, useRef } from "react";

import useAuth, { User } from "../hooks/useAuth";
import {loadStripe} from '@stripe/stripe-js/pure';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js'; 
  import InputField2 from '../components/inputfield';

export default function GetPayments() {
  const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))

  const { user } = useAuth();
  const { jwtAuthToken } = user as User;
  const [methodProcessing, setMethodProcessing] = useState(true);
  const [arrayTest, setArray] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const request = await fetch('/api/get-address', {
          method: 'POST',
          body: jwtAuthToken,
        });
        const intent = (await request.json());
        console.log(intent)
        if (intent.paymentMethod.data.length > 0) {
          setArray(intent.paymentMethod.data)
          setMethodProcessing(false)
          } else {
            setMethodProcessing(false)
          }
    
      } catch (error) {
        console.log('Failed to get cID');
        console.log(error);
        return null;
      }
    
    }
    fetchMyAPI()
  }, []);

  useEffect(() => {
    if (showSuccess===true)  window.location.reload();
  
  }, [showSuccess]);

  useEffect(() => {
    if (window.location.href.indexOf("payments") === -1) {
      window.location.reload();
    }
  });
  const getButtonId = (e) => {
    console.log(e.target.dataset.id)
  }
  return (
    <div className="sub-list payment-change-page">
      {methodProcessing === false ? (
        <>
              <Elements stripe={stripePromise}>
                            <RenderStripe allPayments={arrayTest} changeSuccess={succ => setShowSuccess(succ)} />
                          </Elements>
        </>
      ): (
        <div class='loading-bought'></div>
      )}
    </div>
  );

}



const RenderStripe = (props) => {
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [prevExpY, setPrevExpY] = useState("");
  const [prevExpM, setPrevExpM] = useState("");
  const [status, setStatus] = useState(0);
  const [succeeded, setSucceeded] = useState(false);
  const [prevName, setPrevName] = useState("");
  const [prevEmail, setPrevEmail] = useState("");
  const [error, setError] = useState(null)
  const [prevBrand, setPrevBrand] = useState("");
  const [prevPaymentID, setPrevID] = useState(""); //previous payment ID.
  const [prevLast4, setLast4] = useState("");
  const [clickedItem, setClickedItem] = useState(0);
  const [firstDisabled, setFirstDisabled] = useState(false);
  const [unableToSet, setUnableToSet] = useState(false);
  const nameForm = useRef(null);
  const [methodExists, setMethodExists] = useState(false);
  const [genericError, setGenericError] = useState(false);
  const radioHandler = (status) => {
    setStatus(status);
  };
          

  useEffect(() => {

    if (props.allPayments.length > 0) {
      setPrevID(props.allPayments[0].id);
      setLast4(props.allPayments[0].card.last4);
      setPrevExpY((props.allPayments[0].card.exp_year).toString().slice(-2));
      setPrevExpM(('0' + props.allPayments[0].card.exp_month.toString()).toString().slice(-2));
      setPrevName(props.allPayments[0].billing_details.name);
      setPrevEmail(props.allPayments[0].billing_details.email);
      setPrevBrand(props.allPayments[0].card.brand);
      setDisabled(false)
    } else {
      radioHandler(1)
    }


  }, []);

  const handleSubmit = async (ev) => {
    const form = nameForm.current
    const email = form['email'].value 
    ev.preventDefault();
    setMethodExists(false)
    setGenericError(false)
    setProcessing(true);
    let payload;
    //status 0 = using old card
    if (status===0) {
      //delete it
      let ex = {
        token: JSON.parse(localStorage.auth).authToken,
        pid: prevPaymentID
      }
      const request3 = await fetch('/api/delete-method', {
        method: 'POST',
        body: JSON.stringify(ex),
      });
      const intent = (await request3.json());
      if (intent.failed === true) {
        setMethodExists(true)
      }
      if (intent.exists === true) {
        setGenericError(true)
      }
  
     payload = true;
    } else {
      //new card
    const request = await fetch('/api/setup-init', {
      method: 'POST',
      body: JSON.parse(localStorage.auth).authToken,
    });
    const intent = (await request.json());
       const request2 = await stripe.confirmCardSetup(intent.paymentIntent.client_secret, {
       
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name:  form['firstname'].value,
            email: form['email'].value,
          }
        },
      });
      if (request2.setupIntent.status === undefined) {
        setProcessing('')
        return;
      }
      if (request2.setupIntent.status === 'succeeded') {
  
       payload = true;
      } else {
        setProcessing('')
        return;
      }


    }

console.log(payload)
    if (payload === true) {
      props.changeSuccess(true)
  
    } else {
      setProcessing('')
    }
  }


  

  const newCardButton = () => {
    radioHandler(1)
    if (firstDisabled === false) {
      setDisabled(true)
      setFirstDisabled(true)
    }

  }

  const getOldCard = (e) => {
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

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
    //if nameform ref name is 4+ characters and email is valid, do this. else don't do this.
  };


  const stripe = useStripe();
  const elements = useElements();
  return (

    <div class='changer-sub'>
        <div class='choose-new-card'>Choose a new card for the subscription:</div>
                          <div class='change-sub-selection'>
                          <div className={`payment register-form col-md-6 status-${status} load-true success-${succeeded} process-${processing}`}>
                          <div class={`selection-section`}>
           {props.allPayments && props.allPayments.map((el, index) =>
                  <React.Fragment key={index}>
                  <div data-id={el.id} data-month={el.card.exp_month} data-year={el.card.exp_year} data-brand={el.card.brand} data-last4={el.card.last4} data-prevname={el.billing_details.name} data-prevemail={el.billing_details.email} onClick={getOldCard} data-idindex={index} className={index === clickedItem ? "previous-payment is-checked" : "previous-payment"}>
                  <div className={`prev-brand ${el.card.brand}`}></div>
                  <div className="prev-last4">{el.card.last4}</div>

    </div>
                  </React.Fragment>
)}
<div onClick={newCardButton} className={`new-payment`}>+ New Card</div>
            </div>
            
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
      

      </div>

      <div className='payment-infos'>
        <div className="prev-name-on-card">{prevName}</div>
        <div className="prev-email">{prevEmail}</div> 
        <div className='prev-last-box'>
          <div className="brand-last4"><div className={"prev-brand " + prevBrand}></div><div className="prev-last4">**** {prevLast4}</div></div><div className="prev-expiry">{prevExpM}/{prevExpY}</div>
        </div>
      </div>
      
      <>
      <div className='paybtn-cont'>
   
            {status === 0 ? (
                  <button className='pay-btn deleter' disabled={processing || disabled || succeeded} id="submit">
                  <span id="button-text">
                    {processing ? (
                      <div className="spinner" id="spinner">Delete</div>
                    ) : (
                      `Delete`
                    )}
                  </span>
                  </button>
            ) : (
              <button className='pay-btn' disabled={processing || disabled || succeeded} id="submit">
              <span id="button-text">
                {processing ? (
                  <div className="spinner" id="spinner">Add Payment</div>
                ) : (
                  `Add Payment`
                )}
              </span>
              </button>
            )}


</div>
      </>
      <div className='powered-by-stripe-small'></div>
      {methodExists === true ? (
   <div className="card-error" role="alert">
   Card is being used in a subscription. Change the subscription first before deleting this card.
 </div>
      ): (
        <></>
      )}
     {genericError === true ? (
   <div className="card-error" role="alert">
  Unable to delete card. Please try again later.
 </div>
      ): (
        <></>
      )}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
    <div className={"result-message"}>
     <div className='result-message-success'>Succeeded!</div>
    </div>
      
    </form>
                          
                          </div>
                          </div>
                        </div>



  )
}

