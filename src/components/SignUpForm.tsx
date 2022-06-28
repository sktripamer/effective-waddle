import * as React from "react";
import { Link, navigate } from "gatsby";
import { useState } from "react";

function validateEmail(email) 
    {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }


export default function LogInForm() {

  const [loginStep, setLoginStep] = useState(0);
  const [loadingUser, setLoadingUser] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false)
  const [goToEmail, setGoToEmail] = useState('')
  const [emailText, setEmailText] = useState('')
  

async function handleVerify() {
  setEmailValidError(false)
  let emailvalue = ((document.getElementById('log-in-email') as HTMLInputElement)).value
  setEmailText(emailvalue)
  setLoadingUser(true)
  if (validateEmail(emailvalue) === false) {
    setLoadingUser(false)
    setEmailValidError(true)
    return;
  }

  const request = await fetch('/api/verify-account', {
    method: 'POST',
    body: emailvalue,
  });
  const intent = (await request.json());
  setLoadingUser(false)
  console.log(intent)
  if (intent.exists.message === true) {
    //returns true if the account exists and has notregistered value, or if email doesnt exist.
    let splitEmail = emailvalue.split('@');
    setGoToEmail(splitEmail[splitEmail.length - 1])
    //trigger email
 
    setLoginStep(2)
  } else {
    setEmailValidError(true)
    setLoginStep(0)
  }
}

  
  return (
  <div className={`login-page loginstep-${loginStep} checkuser-${loadingUser}`}>
        <div className={`verify-sent-container`}>
    {2 === loginStep
                ? (
                 <div className='search-outer-cont'>
                   <div className="search-bar-title">
                      <div className="search-bar-text">Verify Email</div>
                      <div onClick={() =>  setLoginStep(0)} className='search-bar-close'>X</div>
                   </div>
                   <div class='email-sent'>
                     <div class="verify-email-text">{`Please click the link that we sent to ${emailText} to confirm your account.`}</div>
                   <div id="anim-wrapper">
  <div id="anim-bg">
    <div id="env-wrapper">
      <div class="speedline line1"></div>
      <div class="speedline line2"></div>
      <div class="speedline line3"></div>
    <i id="env" class="aasd"></i>

    </div>
  </div>
  
    <div id="check-container">
    <div class="check-stroke1"></div>
    <div class="check-stroke2"></div>
  </div>

</div>
<a class='goto-email' href={`https://${goToEmail}`} target="_blank" rel="noreferrer noopener">
  {`Go To ${goToEmail.substr(0, goToEmail.lastIndexOf("."))}`}
</a>
                     </div>
                   </div>
                  )
                : ""}
    </div>
     <h1 onClick={() => navigate('/')}>Revival of Revenue</h1>             
    <form className={`login-form`} method="post">
      <fieldset >
      <h2>Sign Up</h2>      
        <div className="login-email">
        <div class="inputwrap emailer">
        <input
          id="log-in-email"
          type="text"
          name="email"
          autoComplete="email"
          required
        />
        <div class="label">Email</div>
        </div>
        {emailValidError === true ? (
          <p className="error-message">Invalid email. Please try again again or use a different email.</p>
        ) : null}      
        <button className="verify-user-button" onClick={handleVerify} disabled={loadingUser}>Next</button>
        </div>
        


      </fieldset>
      <p className="account-sign-up-message">
       Already have an account?{' '}
        <Link to="/log-in">
          Log In
        </Link>
      </p>
    </form>
    
  </div>
  );
}
