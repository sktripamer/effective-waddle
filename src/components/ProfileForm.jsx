import * as React from "react";
import { useMutation, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import useAuth, { User } from "../hooks/useAuth";
import InputField2 from './inputfield';

export default function ProfileForm() {


  useEffect(() => {
    if (window.location.href.indexOf("profile") === -1) {
      window.location.reload();
    }
  });
  const [processing, setProcessing] = useState(false)
  const [parsedShippingData, setParsedShippingData] = useState([])
  const [shippingData, setShippingData] = useState('');
  const [addressDisabled, setAddressDisabled] = useState(false)
  const [country, setCountry] = useState([{
    name: 'United States of America',
    code: 'US'
  }]); 
  const [clickedAddress, setClickedAddress] = useState(-1);
  const { user } = useAuth();
  const { jwtAuthToken } = user;

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const request = await fetch('/api/get-address', {
          method: 'POST',
          body: jwtAuthToken,
        });
        const intent = (await request.json());
        console.log(intent)
        if (intent.customerID !== '') {
          setShippingData(intent.address);
          let tempdata = JSON.parse(intent.address)
          setParsedShippingData(tempdata)
          setAddressDisabled(true)

          document.getElementById("ship-name").value = tempdata[0].first_name;
          document.getElementById("ship-address1").value = tempdata[0].address_1;
          document.getElementById("ship-address2").value = tempdata[0].address_2;
          document.getElementById("ship-city").value = tempdata[0].city;
          document.getElementById("ship-state").value = tempdata[0].state;
          document.getElementById("ship-zip").value = tempdata[0].postcode;
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

    console.log('dd')
  
    setAddressDisabled(true)
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
    <div className='profile-page'>
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
    </div>

{clickedAddress < 0 ? (
<button disabled={processing} onClick={addAddress} class='pay-btn'>Save Address</button>
) : (
<button onClick={removeAddress} class='delete-address-btn'>Remove Address</button>
)}
    
    </div>
  );
}
