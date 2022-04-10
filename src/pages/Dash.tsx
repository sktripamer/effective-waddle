import * as React from "react";
import { useState, useLayoutEffect  } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import GetOrders from "../components/GetOrders";
import AuthContent from "../components/AuthContent";
// styles


// data

// markup
const DashPage = () => {
  const [page, setPage] = useState('');

  useLayoutEffect(() => {
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
          <AuthContent>
        <GetOrders/>
        </AuthContent>
      )}
    </Layout>
  )
}

export default DashPage
