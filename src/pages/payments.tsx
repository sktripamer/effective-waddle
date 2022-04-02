import * as React from "react";

import AuthContent from "../components/AuthContent";
import Layout from "../components/Layout";
import GetPayments from "../components/GetPayments";

export default function Profile() {
  return (
    <Layout>
      <h1>Orders</h1>
      <AuthContent>
        <GetPayments />
      </AuthContent>
    </Layout>
  );
}
