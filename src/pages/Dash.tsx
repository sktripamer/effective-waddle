import * as React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import GetOrders from "../components/GetOrders";
// styles


// data

// markup
const DashPage = () => {
  const [page, setPage] = useState('');
  return (
    <Layout>
      <Nav changePage={page => setPage(page)}/>
      {page === 'orders' && (
        <GetOrders/>
      )}
    </Layout>
  )
}

export default DashPage
