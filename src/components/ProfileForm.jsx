import * as React from "react";
import {useState, useEffect, useRef } from "react";

import useAuth, { User } from "../hooks/useAuth";
import {loadStripe} from '@stripe/stripe-js/pure';

  import InputField2 from '../components/inputfield';

  import Select from "react-dropdown-select";

export default function GetSubscriptions() {
  const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))

  const { user } = useAuth();
  const { jwtAuthToken } = user;
  const [methodProcessing, setMethodProcessing] = useState(1);
  const [arrayTest, setArray] = useState({});
  const [loadSearch, setLoadSearch] = useState(false)
  
  const [loadingPaymentData, setLoadingPaymentData] = useState(true)
  const [defaultPayment, setDefaultPayment] = useState({})
  const [allPayments, setAllPayments] = useState([])
  const [nameOfSubscription, setNameOfSubscription] = useState(null)
  const [changeSubscription, setChangeSubscription] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [subID, setSubID] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [parsedShippingData, setParsedShippingData] = useState([])
  const [shippingData, setShippingData] = useState('');
  const [addressDisabled, setAddressDisabled] = useState(false)
  const [country, setCountry] = useState([{
    name: 'United States of America',
    code: 'US'
  }]); 



  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const request = await fetch('/api/get-address', {
          method: 'POST',
          body: email(),
        });
        const intent = (await request.json());
        console.log(intent)
        if (intent.customerID !== '') {
          setShippingData(intent.address);
          let tempdata = JSON.parse(intent.address)
          setParsedShippingData(tempdata)
          setAddressDisabled(true)

          // document.getElementById("ship-name").value = tempdata[0].first_name;
          // document.getElementById("ship-address1").value = tempdata[0].address_1;
          // document.getElementById("ship-address2").value = tempdata[0].address_2;
          // document.getElementById("ship-city").value = tempdata[0].city;
          // document.getElementById("ship-state").value = tempdata[0].state;
          // document.getElementById("ship-zip").value = tempdata[0].postcode;
          setCountry([{
            name: 'United States of America',
            code: tempdata[0].country
          }])
          setClickedAddress(0)
          } else {
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
    if (window.location.href.indexOf("profile") === -1) {
      window.location.reload();
    }
  });
  console.log(arrayTest)

const openChange = () => {

}

  const addAddress = async () => {
    setProcessing(true)
    let ex = {};
    ex.token = jwtAuthToken;
    ex.previousShippingData = shippingData;
    ex.shippingData = {
      shippingaddress1: document.getElementById("ship-address1").value,
      shippingaddress2: ocument.getElementById("ship-address2").value,
      shippingname: document.getElementById("ship-name").value,
      shippingcity: document.getElementById("ship-city").value,
      shippingstate: document.getElementById("ship-state").value,
      shippingzip: document.getElementById("ship-zip").value,
      shippingcountry: country[0].code,
    }
    const request = await fetch('/api/add-address', {
      method: 'POST',
      body: JSON.stringify(ex),
    });
    const intent = (await request.json());
    console.log(intent)
      setProcessing(false)
      window.location.reload()
      //setsuccess

  }

  const removeAddress = async () => {
    setProcessing(true)
    let tempdata = JSON.parse(shippingData)
    tempdata.splice(clickedAddress,1)
    let ex = {};
    ex.token = jwtAuthToken;
    ex.previousShippingData = JSON.stringify(tempdata);
    const request = await fetch('/api/remove-address', {
      method: 'POST',
      body: JSON.stringify(ex),
    });
    const intent = (await request.json());
    console.log(intent)
      setProcessing(false)
      window.location.reload()
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
  
    setAddressDisabled(false)

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
                            <div class='using-card successer'>Successfully changed payment!</div>
                          )}
                          <div class='using-card'>Using Card:</div>
                         <div class='selection-section defaultm'>
                          <div class='previous-payment is-checked'>
                            <div className={`prev-brand ${defaultPayment.card.brand}`}></div>
                            <div className="prev-last4">{defaultPayment.card.last4}</div>
                          </div>
                        </div>
                        {changeSubscription === false ? (
                          <button onClick={() => setChangeSubscription(true)} class='change-sub-button'>Edit Subscription</button>
                        ): (
                        <></>
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
