import * as React from "react";
import { useMutation, gql } from "@apollo/client";
import { Link } from "gatsby";

const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!
    $password: String!
  ) {
    registerUser(
      input: {
        username: $email
        email: $email
        password: $password
    ) {
      user {
        databaseId
      }
    }
  }
`;

export default function SignUpForm() {
  const [register, { data, loading, error }] = useMutation(REGISTER_USER);
  const wasSignUpSuccessful = Boolean(data?.registerUser?.user?.databaseId);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data);
    register({
      variables: values,
    }).catch(error => {
      console.error(error);
    });
  }

  if (wasSignUpSuccessful) {
    return (
      <p>
        Thanks! Please log in.
      </p>
    )
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="sign-up-email">Email</label>
        <input
          id="sign-up-email"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="username"
          required
        />
           <label htmlFor="sign-up-password">Password</label>
        <input
          id="sign-up-password"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="password"
          required
        />
        {error ? (
          (error.message.includes('This username is already registered') ? (
            <p className="error-message">
              You&#39;re already signed up! <Link to="/log-in">Log in</Link>
            </p>
          ) : (
            <p className="error-message">{error.message}</p>
          ))
        ) : null}
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </fieldset>
      <p>
        Already have an account? <Link to="/log-in"><a>Log in</a></Link>
      </p>
    </form>
  );
}
