import * as React from "react";
import {useState, useEffect, useRef } from "react";

import useAuth, { User } from "../hooks/useAuth";

  import InputField2 from '../components/inputfield';

  import Select from "react-dropdown-select";

export default function GetSubscriptions() {
  const [hideAddress, setHideAddress] = useState(true)
  const [hideAcc, setHideAcc] = useState(true)
  useEffect(() => {
    if (window.location.href.indexOf("profile") === -1) {
      window.location.reload();
    }
  });


  return (
      <div class='sub-list order-page'>
        <h2>Add and remove addresses</h2>
        {hideAddress === false ? (
          <div class='address-form-cont'>
          <button class='address-form-button' onClick={() => setHideAddress(true)}>View Addresses</button>
          <DrawForm/>
          </div>
          
        ): (
          <button class='address-form-button closer' onClick={() => setHideAddress(false)}></button>
        )}
        <h2>View and change account details</h2>
        {hideAcc === false ? (
          <div class='address-form-cont'>
          <button class='address-form-button' onClick={() => setHideAcc(true)}>View Account</button>
          
          </div>
          
        ): (
          <button class='address-form-button closer' onClick={() => setHideAcc(false)}></button>
        )}
      </div>
  )

}

const AccForm = () => {

}


const DrawForm = () => {
  
  const { user } = useAuth();
  const { jwtAuthToken } = user;
  const [methodProcessing, setMethodProcessing] = useState(1);
  const [arrayTest, setArray] = useState({});
  const [loadSearch, setLoadSearch] = useState(false)
  const [clickedAddress, setClickedAddress] = useState(-1);
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
  const [addressCheckHidden, setAddressCheckHidden] = useState('');
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
          setShippingData(intent.customerID);
          let tempdata = JSON.parse(intent.customerID)
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
          setAddressCheckHidden('-hide')
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


  console.log(arrayTest)

const openChange = () => {

}

  const addAddress = async () => {
    setProcessing(true)
    console.log(shippingData)
    let tempdata;
    if (shippingData === '' || shippingData === undefined) {
      tempdata = ''
    } else {
      tempdata = JSON.parse(shippingData)
    }



    let ex = {};
    ex.token = jwtAuthToken;
    if (shippingData === '' || shippingData === undefined) {
ex.previousShippingData = ''
    } else {
      ex.previousShippingData = shippingData;
    }

    ex.shippingData = {
      shippingaddress1: document.getElementById("ship-address1").value,
      shippingaddress2: document.getElementById("ship-address2").value,
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
      if (tempdata === '') {
        let tempship = [{
          "first_name": document.getElementById("ship-name").value,
          "last_name": '',
          "address_1": document.getElementById("ship-address1").value,
          "address_2": document.getElementById("ship-address2").value,
          "city": document.getElementById("ship-city").value,
          "state": document.getElementById("ship-state").value,
          "postcode": document.getElementById("ship-zip").value,
          "country":country[0].code
        }]
        setShippingData(JSON.stringify(tempship))
        setParsedShippingData(tempship)
      } else {
        let tempship = {
          "first_name": document.getElementById("ship-name").value,
          "last_name": '',
          "address_1": document.getElementById("ship-address1").value,
          "address_2": document.getElementById("ship-address2").value,
          "city": document.getElementById("ship-city").value,
          "state": document.getElementById("ship-state").value,
          "postcode": document.getElementById("ship-zip").value,
          "country":country[0].code
        }
        tempdata.push(tempship)
        setShippingData(JSON.stringify(tempdata))
        setParsedShippingData(tempdata)
      }
      //setsuccess

  }

  const removeAddress = async () => {
    setProcessing(true)
    let tempdata = JSON.parse(shippingData)
    tempdata.splice(clickedAddress,1)
  
    let ex = {};
    ex.token = jwtAuthToken;
    if (tempdata.length === 0) {
      ex.previousShippingData = ''
    } else {
      ex.previousShippingData = JSON.stringify(tempdata);
    }
  
    const request = await fetch('/api/remove-address', {
      method: 'POST',
      body: JSON.stringify(ex),
    });
    const intent = (await request.json());
    console.log(intent)
      setProcessing(false)
      if (tempdata.length === 0) {
        setParsedShippingData([])
        setShippingData('')
      } else {
        setParsedShippingData(tempdata)
        setShippingData(JSON.stringify(tempdata))
      }
      setParsedShippingData(tempdata)
      setShippingData(JSON.stringify(tempdata))
      setClickedAddress(-1)
  }
  const customNoDataRenderer = () => (
    <div className='no-country'>No country found</div>
  );

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
    setAddressCheckHidden('-hide')
    console.log('dd')
  
    setAddressDisabled(true)
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
    setAddressCheckHidden('')
    setAddressDisabled(false)

  }
  

  return (
    <div id="payment-form">
    <div className='shipping-form-data'>
<div class='shipping-info'>Shipping Info</div>
    {parsedShippingData.length === 0 ? (
      <></>
    ) : (
      <div class={`selection-address-form addr-proccessing-${processing}`}>
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
