import * as React from "react";

import AuthContent from "../components/AuthContent";
import Layout from "../components/Layout";
import GetOrders from "../components/GetOrders";

export default function Profile() {
  return (
    <Layout>
      <h1>Orders</h1>
      <AuthContent>
        <GetOrders />
      </AuthContent>
    </Layout>
  );
}
