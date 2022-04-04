import * as React from "react";

import AuthContent from "../components/AuthContent";
import Layout from "../components/Layout";
import GetSubscriptions from "../components/GetSubscriptions";

export default function Profile() {
  return (
    <Layout>
      <h1>Subscriptions</h1>
      <AuthContent>
        <GetSubscriptions />
      </AuthContent>
    </Layout>
  );
}
