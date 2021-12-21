
import React, { Component, useState } from 'react';
import { isEmpty, remove } from 'lodash';

export default function InputField2({name,label}) {
  
  const [state, setState] = useState(isUserValidated)
  return (
    <div>
     <label>{label}</label>
      <input type="text" 
      value={state} 
      name={name}
      onChange={(e) => setState(e.target.value)} />
    </div>
  );

}

const isUserValidated = () => {
  let userLoggedInData = "";

  if (undefined !== window) {
    let authTokenData = localStorage.getItem("auth");

    if (!isEmpty(authTokenData)) {
      authTokenData = JSON.parse(authTokenData);

      if (!isEmpty(authTokenData.user.email)) {
        userLoggedInData = authTokenData.user.email;
      }
    }
  }

  return userLoggedInData;
};
