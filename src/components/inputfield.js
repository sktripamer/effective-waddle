
import React, { Component, useState } from 'react';


export default function InputField2({name,label}) {
  const [state, setState] = useState('')
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
