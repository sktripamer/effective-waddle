import * as React from "react";

import AuthContent from "../components/AuthContent";
import Layout from "../components/Layout";
import GetOrders from "../components/GetOrders";
import Nav from "../components/Nav";
export default function Profile() {
  return (
    <Layout>
      <Nav />
      <h1>Orders</h1>
      <AuthContent>
        <GetOrders />
      </AuthContent>
    </Layout>
  );
}
