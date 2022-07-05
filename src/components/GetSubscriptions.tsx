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


export default function GetSubscriptions() {
  const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))

  const { user } = useAuth();
  const { jwtAuthToken } = user as User;
  const [methodProcessing, setMethodProcessing] = useState(1);
  const [arrayTest, setArray] = useState({});
  const [loadSearch, setLoadSearch] = useState(false)
  
  const [loadingPaymentData, setLoadingPaymentData] = useState(true)
  const [defaultPayment, setDefaultPayment] = useState({})
  const [allPayments, setAllPayments] = useState([])
  const [nameOfSubscription, setNameOfSubscription] = useState(null)
  const [changeSubscription, setChangeSubscription] = useState(false)
  const [cancelSubscription, setCancelSubscription] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [subID, setSubID] = useState(null)
  const [cancelLoading, setCancelLoading] = useState(false) 
  const [cancelError, setCancelError] = useState(false) 
  const [cancelSuccess, setCancelSuccess] = useState(false) 


  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const request = await fetch('/api/get-subscriptions', {
          method: 'POST',
          body: jwtAuthToken,
        });
        const intent = (await request.json());
        console.log(intent)
        if (intent === true) {
          setMethodProcessing(2)
        }
        setArray(intent.paymentMethod.data);
          setMethodProcessing(0)
      } catch (error) {
        console.log('Failed to get cID');
        console.log(error);
        return null;
      }
    
    }
    fetchMyAPI()
  }, []);
  useEffect(() => {
    if (window.location.href.indexOf("subscriptions") === -1) {
      window.location.reload();
    }
  });
  console.log(arrayTest)

const openChange = () => {

}


  const closeModal = () => {
    setLoadSearch(false)
    setCancelSubscription(false)
    setDefaultPayment([])
    setShowSuccess(false)
    setSubID(null)
    setNameOfSubscription(null)
    setChangeSubscription(false)
    setAllPayments([])
    setLoadingPaymentData(true)
    setCancelLoading(false)
    setCancelError(false)
  }

  const cancelSubButton = () => {
    setChangeSubscription(false)
    setCancelSubscription(true)
  }

  const cancelSubAction = async (subber) => {
    setCancelLoading(true)
    let ex = {
      sub: subber
    }
    const request3 = await fetch('/api/cancel-sub', {
      method: 'POST',
      body: JSON.stringify(ex),
    });
   let payload = (await request3.json());
   if (payload.paymentIntent.cancel_at_period_end === true) {
     //successflly canceled
     setCancelLoading(false)
     setCancelSuccess(true)
     setShowSuccess(true)
    } else {
      setCancelLoading(false)
      setCancelSuccess(false)
      setCancelError(true)
    }
  }
  const getButtonId = async (e) => {
    setLoadingPaymentData(true)
    setLoadSearch(true)
    console.log(e.target.dataset.id)
    const request = await fetch('/api/get-payment', {
      method: 'POST',
      body: jwtAuthToken,
    });
    const intent = (await request.json());
    console.log(intent);


    for (let i=0; i < intent.paymentMethod.data.length; i++) {   
      if (intent.paymentMethod.data[i].id === e.target.dataset.paymentid) {
        setDefaultPayment(intent.paymentMethod.data[i])
        break;
      }
      
    }
    if (intent.paymentMethod.data.length > 0) {
      setSubID(e.target.dataset.id)
      setNameOfSubscription(e.target.dataset.nameof)
      setAllPayments(intent.paymentMethod.data)
      setLoadingPaymentData(false);
      }

    //loop through and match one with dataset one (this is the one currently used), store in array.
    //store them all in usestate array
    //display default one on first modal box.
    //have button to "change subscription"
    //this button pops up the select payment method, pretty much from checkout page.
    //can select one, and save it. it will use  stripe.subscriptions.update sub id default_payment_method with the one selected (new api file)
    //another button to cancel subscription
    //this will confirm it. subscription will be canceled.
  }

  return (
    <div className='sub-list'>

       {methodProcessing === 1 ? (
         <>
           <h2>Subscriptions</h2>
           <div class='sub-subheader'>View and manage your subscriptions</div>
            <div class='subloading'>Loading subscriptions...</div>
            </>
          ) : ('')}
           {methodProcessing === 2 ? (
         <>
         <h2>Subscriptions</h2>
         <div class='sub-subheader'>View and manage your subscriptions</div>
          <div class='subloading'>No subscriptions found!</div>
          </>
          ) : ('')}
          
          {methodProcessing === 0 ? (
            <>
                <div className={`search-btn-container search-${loadSearch}`}>
              {true == loadSearch
                ? (
                 <div className='search-outer-cont'>
                   <div className="search-bar-title">
                      <div className="search-bar-text">Subscription</div>
                      <div onClick={closeModal} className='search-bar-close'>X</div>
                   </div>
                    {loadingPaymentData === true ? (
                      <div class='subscription-section-modal'> 
                      <div class='loading-bought'></div>
                      </div>
                    )
                    : (
                     <div class='more-payment-info'>
                       {defaultPayment.card !== undefined ? (
                        <div class={`subscription-section-modal successchange-${showSuccess} changesub-${changeSubscription}`}> 
                          <div class='subscription-modal-head'>{nameOfSubscription}</div>
                          {showSuccess === false ? (
                            <></>
                          ) : (
                              <>
                              {cancelSuccess===true ? (
                                <div class='using-card successer'>Successfully canceled subscription. Subscription will remain active for the remaining period you've already paid for.</div>
                              ) : (
                                <div class='using-card successer'>Successfully changed payment!</div>
                              )}

                               
                              </>
                           

                          )}
                          <div class='using-card'>Using Card:</div>
                         <div class='selection-section defaultm'>
                          <div class='previous-payment is-checked'>
                            <div className={`prev-brand ${defaultPayment.card.brand}`}></div>
                            <div className="prev-last4">{defaultPayment.card.last4}</div>
                          </div>
                        </div>
                        {cancelSubscription === false ? (
                            <>
                             {changeSubscription === false ? (
                          <button onClick={() => setChangeSubscription(true)} class='change-sub-button'>Edit Subscription</button>
                        ): (
                          <>
                          <Elements stripe={stripePromise}>
                            <RenderStripe allPayments={allPayments} subID={subID} changeSub={sub => setChangeSubscription(sub)} changeSuccess={succ => setShowSuccess(succ)} />
                          </Elements>
                           <button onClick={cancelSubButton} class='cancel-sub-button'>Cancel Subscription</button>
                           </>
                        )}
                            
                            </>
                        ) : (
                          <>
                              <div class='cancel-sub-cont'>
                                <div class='cancel-sub-text'>Cancel subscription?</div>
                                <div class='cancel-button-cont'>
                                  {cancelLoading === true ? (
    <div class='loading-bought'></div>
                                  ) : (
                                    <>
                                       <button onClick={() => cancelSubAction(subID)} class='change-sub-button sub-cancel'>Cancel</button>
                                <button onClick={() => closeModal} class='return-btn'>Go back</button>
                                    </>
                                  )}
                               

                                </div>
                              </div>
                          </>

                        )}

                       
                       


                        </div>
                      ): (
                        <>
                      <div class='subscription-section-modal'> 
                      <div class='loading-bought'></div>
                      </div>
                        </>
                      )}


                     </div>





//
                    )}
                   </div>
                  )
                : ""}
    </div>
            <h2>Subscriptions</h2>
            <div class='sub-subheader'>View and manage your subscriptions</div>

            <div class='subscription-list'>
               {arrayTest && arrayTest.map((el, index) =>
                  <>
                  <div data-nameof={el.plan.id === 'price_1LFzPWEIi9OXKxaBADloi95c' ? 'Entrepreneurial Espresso' : ''} data-paymentid={el.default_payment_method} data-id={el.id} onClick={getButtonId} className={'sub-item'}>
                    <div class='planactive-subname'>
                     <div className={`planactive plan-${el.plan.active === true ? 'true' : 'false'}`}>{el.plan.active === true ? 'ACTIVE' : 'INACTIVE'}</div>
                     <div className='sub-name'>{el.plan.id === 'price_1LFzPWEIi9OXKxaBADloi95c' ? 'Entrepreneurial Espresso' : ''}</div>
                    </div>
                    <div className="next-payment-date">{new Date((el.billing_cycle_anchor * 1000)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <div className='plancost'>{`$${el.plan.amount.toString().substring(0,el.plan.amount.toString().length-2)+"."+el.plan.amount.toString().substring(el.plan.amount.toString().length-2)}`}</div>
                    <div data-id={el.id} data-nameof={el.plan.id === 'price_1LFzPWEIi9OXKxaBADloi95c' ? 'Entrepreneurial Espresso' : ''} onClick={getButtonId} data-paymentid={el.default_payment_method} className='more-sub-dets'>More Details</div>
                  </div>
                  </>
)}
</div>
</>
            ): ('')}
   
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
    setProcessing(true);
    let newmethod;
    let payload;
    //status 0 = using old card
    if (status===0) {
      //  payload = await stripe.confirmCardPayment(intent.paymentIntent.client_secret, {
      //   payment_method: prevPaymentID,
      //});
      //save prevPaymentID to this sub.
      let ex = {
        sub: props.subID,
        pid: prevPaymentID
      }
      const request3 = await fetch('/api/change-sub', {
        method: 'POST',
        body: JSON.stringify(ex),
      });

      newmethod = prevPaymentID;
     payload = (await request3.json());
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
        let ex = {
          sub: props.subID,
          pid:request2.setupIntent.payment_method
        }
        const request3 = await fetch('/api/change-sub', {
          method: 'POST',
          body: JSON.stringify(ex),
        });
        newmethod = request2.setupIntent.payment_method;
       payload = (await request3.json());
      } else {
        setProcessing('')
        return;
      }


    }

console.log(payload)
console.log(newmethod)
    if (payload.paymentIntent.default_payment_method === newmethod) {
      props.changeSuccess(true)
      props.changeSub(false)
    } else {
      setProcessing('')
      setUnableToSet(true)
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
<button className='pay-btn' disabled={processing || disabled || succeeded} id="submit">
<span id="button-text">
  {processing ? (
    <div className="spinner" id="spinner">Set Payment</div>
  ) : (
    `Set Payment`
  )}
</span>
</button>
</div>
      </>
      <div className='powered-by-stripe-small'></div>
      {unableToSet === true ? (
   <div className="card-error" role="alert">
   Unable to change method. Please try again.
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

