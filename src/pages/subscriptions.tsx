import * as React from "react";

import AuthContent from "../components/AuthContent";
import Layout from "../components/Layout";
import GetSubscriptions from "../components/GetSubscriptions";
import {loadStripe} from '@stripe/stripe-js/pure';
import Nav from "../components/Nav";

import {
  Elements
} from '@stripe/react-stripe-js'; 
export default function Profile() {
  const [stripePromise, setStripePromise] = useState(() => loadStripe('pk_test_51Jr6IuEIi9OXKxaBdi4aBOlRU6DgoMcQQNgDCOLo1p8TZDy29xR5tKWHP5C02bF7kKHpkWKq9DI9OCzClVtj8zi500XedIOBD3'))

  return (
    <Layout>
      <Nav />
      <div className='navcontent'>
      <h1>Subscriptions</h1>
      <AuthContent>
      <Elements stripe={stripePromise}>
        <GetSubscriptions />
        </Elements>
      </AuthContent>
      </div>
    </Layout>
  );
}
