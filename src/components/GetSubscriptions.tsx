import * as React from "react";
import {useState, useEffect } from "react";

import useAuth, { User } from "../hooks/useAuth";


export default function GetSubscriptions() {
  const { user } = useAuth();
  const { jwtAuthToken } = user as User;
  const [methodProcessing, setMethodProcessing] = useState(true);
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
        setArray(intent.paymentMethod.data);
          setMethodProcessing(false)
      } catch (error) {
        console.log('Failed to get cID');
        console.log(error);
        return null;
      }
    
    }
    fetchMyAPI()
  }, []);
  console.log(arrayTest)
  const getButtonId = (e) => {
    console.log(e.target.dataset.id)
  }
  return (
    <div className='sub-list'>

       {methodProcessing ? (
            <div>loading subscriptions...</div>
          ) : (
            <div class='subscription-list'>
               {arrayTest && arrayTest.map((el, index) =>
                  <>
                  s
                  <div data-id={el.id} onClick={getButtonId} className={'sub-item'}>
                  <div className="next-payment-date">{new Date((el.billing_cycle_anchor * 1000)).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  <div className='card-info'>{el.default_payment_method}</div>
    </div>
                  </>
)}
</div>
            )}
   
    </div>
  );

}
