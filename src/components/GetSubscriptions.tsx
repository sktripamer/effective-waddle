import * as React from "react";
import {useState, useEffect } from "react";

import useAuth, { User } from "../hooks/useAuth";


export default function GetSubscriptions() {
  const { user } = useAuth();
  const { jwtAuthToken } = user as User;
  const [methodProcessing, setMethodProcessing] = useState(1);
  const [arrayTest, setArray] = useState({});
  const [loadSearch, setLoadSearch] = useState(false)
  const [loadingPaymentData, setLoadingPaymentData] = useState(true)
let defaultPayment;
  const [allPayments, setAllPayments] = useState([])
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
    if (intent.paymentMethod.data > 0) {
    setAllPayments(intent.paymentMethod.data)
    setLoadingPaymentData(false);
    }

    for (let i=0; i < intent.paymentMethod.data.length; i++) {   
      if (intent.paymentMethod.data[i].id === e.target.dataset.paymentid) {
        defaultPayment = intent.paymentMethod.data[i]
        break;
      }
      
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
           <h3>View and manage your subscriptions</h3>
            <div class='subloading'>Loading subscriptions...</div>
            </>
          ) : ('')}
           {methodProcessing === 2 ? (
         <>
         <h2>Subscriptions</h2>
         <h3>View and manage your subscriptions</h3>
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
                      <div onClick={() => setLoadSearch(false)} className='search-bar-close'>X</div>
                   </div>
                    {loadingPaymentData === true ? (
                      <div class='loading-bought'></div>
                    )
                    : (
                     <div class='more-payment-info'>
                          <div class='previous-payment is-checked'>
                        {    console.log(defaultPayment.card.brand)}
                          <div className={`prev-brand ${defaultPayment.card.brand}`}></div>
                    <div className="prev-last4">{defaultPayment.card.last4}</div>
                          </div>

                     </div>
                    )}
                   </div>
                  )
                : ""}
    </div>
            <h2>Subscriptions</h2>
            <h3>View and manage your subscriptions</h3>
            <div class='subscription-list'>
               {arrayTest && arrayTest.map((el, index) =>
                  <>
                  <div data-nameof={el.plan.id === 'price_1LFzPWEIi9OXKxaBADloi95c' ? 'Entrepreneurial Espresso' : ''} data-paymentid={el.default_payment_method} data-id={el.id} onClick={getButtonId} className={'sub-item'}>
                    <div class='planactive-subname'>
                     <div className='planactive'>{el.plan.active === true ? 'ACTIVE' : 'INACTIVE'}</div>
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
