import * as React from "react";

import AuthContent from "../components/AuthContent";
import Layout from "../components/Layout";
import GetSubscriptions from "../components/GetSubscriptions";
import Nav from "../components/Nav";
export default function Profile() {
  return (
    <Layout>
      <Nav />
      <div className='navcontent'>
      <h1>Subscriptions</h1>
      <AuthContent>
        <GetSubscriptions />
      </AuthContent>
      </div>
    </Layout>
  );
}
