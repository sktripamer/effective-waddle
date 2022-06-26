import * as React from "react";
import { Link } from "gatsby";
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

}

  
  return (
    <form className={`login-form loginstep-${loginStep} checkuser-${loadingUser}`} method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <div className="login-email">
        <label htmlFor="log-in-email">Email</label>
        <input
          id="log-in-email"
          type="email"
          name="email"
          autoComplete="username"
          required
        />
       
        <button className="verify-user-button" onClick={handleVerify} disabled={loadingUser}></button>
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
        </div>

        <Link to="/forgot-password" className="forgot-password-link">
          Forgot password?
        </Link>
      </fieldset>
      <p className="account-sign-up-message">
        Don&#39;t have an account yet?{' '}
        <Link to="/sign-up">
          Sign up
        </Link>
      </p>
    </form>
  );
}
