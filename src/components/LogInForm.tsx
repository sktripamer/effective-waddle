import * as React from "react";
import { Link, navigate } from "gatsby";
import { useState, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";

import { GET_USER } from "../hooks/useAuth";

const LOG_IN = gql`
  mutation logIn($login: String!, $password: String!) {
    loginWithCookies(input: {
      login: $login
      password: $password
    }) {
      status
    }
  }
`;
function validateEmail(email) 
    {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }


export default function LogInForm() {
  const [logIn, { loading, error }] = useMutation(LOG_IN, {
    refetchQueries: [
      { query: GET_USER }
    ],
  });
  const [loginStep, setLoginStep] = useState(0);
  const [loadingUser, setLoadingUser] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false)
  const [passwordChanged, setPasswordChanged] = useState(false)
  const [goToEmail, setGoToEmail] = useState('')
  const [emailText, setEmailText] = useState('')
  const [verifyText, setVerifyText] = useState('')
  const errorMessage = error?.message || '';
  const isEmailValid =
    !errorMessage.includes('empty_email') &&
    !errorMessage.includes('empty_username') &&
    !errorMessage.includes('invalid_email') &&
    !errorMessage.includes('invalid_username');
  const isPasswordValid =
    !errorMessage.includes('empty_password') &&
    !errorMessage.includes('incorrect_password');


    useEffect(() => {
      let params = new URLSearchParams(document.location.search);
      let name = params.get("success");

      if (name !== null) {
        ((document.getElementById('log-in-email') as HTMLInputElement)).value = name;
        setEmailText(name)
        setPasswordChanged(true)
        setLoginStep(1)
      
      }

    },[]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoadingUser(true)
    const data = new FormData(event.currentTarget);
    const { email, password } = Object.fromEntries(data);
    logIn({
      variables: {
        login: email,
        password,
      }
    }).catch(error => {
      setLoadingUser(false)
      console.error(error);
    });
  }
  function handleSubmitAlt(email, password) {
    event.preventDefault();
    setLoadingUser(true)

    logIn({
      variables: {
        login: email,
        password,
      }
    }).catch(error => {
      setLoadingUser(false)
      console.error(error);
    });
  }

async function handleVerify() {
  if (loginStep === 1) {
    handleSubmitAlt(((document.getElementById('log-in-email') as HTMLInputElement)).value, ((document.getElementById('log-in-password') as HTMLInputElement)).value)
    return;
  }
  setEmailValidError(false)
  let emailvalue = ((document.getElementById('log-in-email') as HTMLInputElement)).value
  setEmailText(emailvalue)
  setLoadingUser(true)
  if (validateEmail(emailvalue) === false) {
    setLoadingUser(false)
    setEmailValidError(true)
    return;
  }

  const request = await fetch('/api/verify-email', {
    method: 'POST',
    body: emailvalue,
  });
  const intent = (await request.json());
  setLoadingUser(false)
  console.log(intent)
  if (intent.exists.message === true) {
    let splitEmail = emailvalue.split('@');
    setGoToEmail(splitEmail[splitEmail.length - 1])
    //trigger email
    setLoginStep(2)
    setVerifyText('to confirm your account.')
  } else {
    setLoginStep(1)
  }
}


async function setResetPW() {
  let emailvalue = ((document.getElementById('log-in-email') as HTMLInputElement)).value
  setEmailText(emailvalue)
  setLoadingUser(true)
  const request = await fetch('/api/verify-emailpw', {
    method: 'POST',
    body: emailvalue,
  });
  const intent = (await request.json());
  setLoadingUser(false)
  console.log(intent)
  if (intent.exists.message === true) {
    let splitEmail = emailvalue.split('@');
    setGoToEmail(splitEmail[splitEmail.length - 1])
    //trigger email
    setLoginStep(2)
    setVerifyText('to change your password.')
  } else {
    setEmailValidError(true)
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
                     <div class="verify-email-text">{`Please click the link that we sent to ${emailText} ${verifyText}`}</div>
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
    <form className={`login-form`} method="post" onSubmit={handleSubmit}>
      <fieldset aria-busy={loading}>
      <h2>Login</h2> 
      {passwordChanged === true ? (
          <p className="successer-message">Password changed! Login with your new password to continue.</p>
        ) : null}          
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
          <p className="error-message">Invalid email. Please try again.</p>
        ) : null}      
        <button className="verify-user-button" onClick={handleVerify} disabled={loadingUser}>Next</button>
        </div>
        <div className="login-password">
          <div class='email-to-use'>{emailText}</div>


        <div class="inputwrap passworder">
        <input
          id="log-in-password"
          type="password"
          name="password"
          autoComplete="current-password"
          required
        />
        <div class="label">Password</div>
        </div>
          <div class='password-clickables'>
          <div onClick={() =>setLoginStep(0)} class='return-to-email'>Go Back</div>

          <div onClick={setResetPW} className="forgot-password-link">
          Forgot password?
        </div>
          </div>

        {!isEmailValid ? (
          <p className="error-message">Invalid email or password. Please try again.</p>
        ) : null}
        {!isPasswordValid ? (
          <p className="error-message">Invalid email or password. Please try again.</p>
        ) : null}
        <button id="submit-login" class="verify-user-button" type="submit" disabled={loading}>
         Log In
        </button>

        </div>


      </fieldset>
      <p className="account-sign-up-message">
        Don&#39;t have an account yet?{' '}
        <Link to="/sign-up">
          Sign up
        </Link>
      </p>
    </form>
    
  </div>
  );
}
