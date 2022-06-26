import * as React from "react";
import { Link, navigate } from "gatsby";
import { useState } from "react";
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

export default function LogInForm() {
  const [logIn, { loading, error }] = useMutation(LOG_IN, {
    refetchQueries: [
      { query: GET_USER }
    ],
  });
  const [loginStep, setLoginStep] = useState(0);
  const [loadingUser, setLoadingUser] = useState(false);
  const errorMessage = error?.message || '';
  const isEmailValid =
    !errorMessage.includes('empty_email') &&
    !errorMessage.includes('empty_username') &&
    !errorMessage.includes('invalid_email') &&
    !errorMessage.includes('invalid_username');
  const isPasswordValid =
    !errorMessage.includes('empty_password') &&
    !errorMessage.includes('incorrect_password');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { email, password } = Object.fromEntries(data);
    logIn({
      variables: {
        login: email,
        password,
      }
    }).catch(error => {
      console.error(error);
    });
  }

async function handleVerify() {
  setLoadingUser(true)
  const request = await fetch('/api/verify-email', {
    method: 'POST',
    body: ((document.getElementById('log-in-email') as HTMLInputElement)).value,
  });
  const intent = (await request.json());
  setLoadingUser(false)
  console.log(intent)
  if (intent.exists.message === true) {
    //trigger email
    setLoginStep(2)
  } else {
    setLoginStep(1)
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
                   <div>
                     <div class="verify-email-text">Please click the link that we sent to your email to confirm your account.</div>
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
                     </div>
                   </div>
                  )
                : ""}
    </div>
     <h1 onClick={() => navigate('/')}>Revival of Revenue</h1>             
    <form className={`login-form`} method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
      <h2>Login</h2>      
        <div className="login-email">
        <div class="inputwrap emailer">
        <input
          id="log-in-email"
          type="text"
          name="email"
          disabled={loadingUser}
          autoComplete="email"
          required
        />
        <div class="label">Email</div>
        </div>
  
        <button className="verify-user-button" onClick={handleVerify} disabled={loadingUser}>Next</button>
        </div>
        <div className="login-password">
        <label htmlFor="log-in-password">Password</label>
        <input
          id="log-in-password"
          type="password"
          name="password"
          autoComplete="current-password"
          required
        />

        {!isEmailValid ? (
          <p className="error-message">Invalid email. Please try again.</p>
        ) : null}
        {!isPasswordValid ? (
          <p className="error-message">Invalid password. Please try again.</p>
        ) : null}
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </button>


        <Link to="/forgot-password" className="forgot-password-link">
          Forgot password?
        </Link>
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
