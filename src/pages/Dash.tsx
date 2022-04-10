import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import GetOrders from "../components/GetOrders";
// styles


// data

// markup
const DashPage = () => {
  const [page, setPage] = useState('');

  useEffect(() => {
    if (window.location.href.indexOf("orders") > -1) {
        setPage('orders')
    }
    if (window.location.href.indexOf("subscriptions") > -1) {
      setPage('subscriptions')
    }
  }, []);

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
