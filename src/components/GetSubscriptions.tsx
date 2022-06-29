import * as React from "react";
import {useState, useEffect } from "react";

import useAuth, { User } from "../hooks/useAuth";


export default function GetSubscriptions() {
  const { user } = useAuth();
  const { jwtAuthToken } = user as User;
  const [methodProcessing, setMethodProcessing] = useState(1);
  const [arrayTest, setArray] = useState({});
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
  const getButtonId = (e) => {
    console.log(e.target.dataset.id)
  }
  return (
    <div className='sub-list'>

       {methodProcessing === 1 ? (
            <div class='subloading'>Loading subscriptions...</div>
          ) : ('')}
           {methodProcessing === 2 ? (
            <div class='subloading'>No active subscriptions!</div>
          ) : ('')}
          
          {methodProcessing === 0 ? (
            <div class='subscription-list'>
               {arrayTest && arrayTest.map((el, index) =>
                  <>
                  <div data-id={el.id} onClick={getButtonId} className={'sub-item'}>
                  <div className="next-payment-date">{new Date((el.billing_cycle_anchor * 1000)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  <div className='card-info'>{el.default_payment_method}</div>
    </div>
                  </>
)}
</div>
            ): ('')}
   
    </div>
  );

}
