import * as React from "react";
import {useState, useEffect } from "react";

import useAuth, { User } from "../hooks/useAuth";


export default function GetPayments() {
  const { user } = useAuth();
  const { jwtAuthToken } = user as User;
  const [methodProcessing, setMethodProcessing] = useState(true);
  const [arrayTest, setArray] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const request = await fetch('/api/get-payment', {
          method: 'POST',
          body: jwtAuthToken,
        });
        const intent = (await request.json());
        console.log(intent)
        setArray(intent.paymentMethod.data);
        if (intent =='') {
          setMethodProcessing(false)
          return '';
        } else {

          setMethodProcessing(false)

        return intent;
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
    if (window.location.href.indexOf("payments") === -1) {
      window.location.reload();
    }
  });
  const getButtonId = (e) => {
    console.log(e.target.dataset.id)
  }
  return (
    <div className="payment-list">
    <div className='payment register-form col-md-6'>

       {methodProcessing ? (
            <div>loading payments...</div>
          ) : (
            <div class='selection-section'>
           {arrayTest && arrayTest.map((el, index) =>
                  <>
                  <div data-id={el.id} onClick={getButtonId} className={'previous-payment'}>
                  <div className='card-icon'></div>
                  <div className="prev-last4">{el.card.last4}</div>

    </div>
                  </>
)}
            </div>
            )}
   
    </div>
    </div>
  );

}
