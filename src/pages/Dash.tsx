import * as React from "react";
import { useState, useEffect } from "react";
import { navigate } from "gatsby"
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import GetOrders from "../components/GetOrders";
import GetSubscriptions from "../components/GetSubscriptions";
import AuthContent from "../components/AuthContent";
import GetHome from "../components/GetHome"
// styles


// data

// markup
const DashPage = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {

    if (window.location.href.indexOf("orders") > -1) {
        setPage('orders')
        return;
    }
    if (window.location.href.indexOf("subscriptions") > -1) {
      setPage('subscriptions')
      return;
    }
    if (window.location.href.indexOf("home") > -1) {
      setPage('home')
      return;
    }
    navigate("#home")

  }, []);


  return (
    <Layout>
      <Nav changePage={page => setPage(page)} classPass={page}/>
      {page === 'orders' && (
        <AuthContent>
          <GetOrders/>
        </AuthContent>
      )}
      
      {page === 'subscriptions' && (
        <AuthContent>
          <GetSubscriptions/>
        </AuthContent>
      )}

      {page === 'home' && (
         <AuthContent>
         <GetHome/>
       </AuthContent>
      )}
    </Layout>
  )
}

export default DashPage
