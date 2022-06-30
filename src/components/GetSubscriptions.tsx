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
    const request = await fetch('/api/get-subscriptions', {
      method: 'POST',
      body: e.target.dataset.paymentid,
    });
    const intent = (await request.json());
    console.log(intent)
    setLoadingPaymentData(false)
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
                     'loaded'
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
                  <div data-paymentid={el.default_payment_method} data-id={el.id} onClick={getButtonId} className={'sub-item'}>
                    <div className="next-payment-date">{new Date((el.billing_cycle_anchor * 1000)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <div className='sub-name'>{el.plan.id === 'price_1LFzPWEIi9OXKxaBADloi95c' ? 'Entrepreneurial Espresso' : ''}</div>
                    <div className='planactive'>{el.plan.active === true ? 'ACTIVE' : 'INACTIVE'}</div>
                    <div className='plancost'>{`$${el.plan.amount.toString().substring(0,el.plan.amount.toString().length-2)+"."+el.plan.amount.toString().substring(el.plan.amount.toString().length-2)}`}</div>
                  </div>
                  </>
)}
</div>
</>
            ): ('')}
   
    </div>
  );

}
