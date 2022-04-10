import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import GetOrders from "../components/GetOrders";
import GetSubscriptions from "../components/GetSubscriptions";
import AuthContent from "../components/AuthContent";
// styles


// data

// markup
const DashPage = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.onpageshow = function(event) {
      if (event.persisted) {
        console.log('here')
        window.location.reload();
      }
    };
    if (window.location.href.indexOf("orders") > -1) {
        setPage('orders')
        return;
    }
    if (window.location.href.indexOf("subscriptions") > -1) {
      setPage('subscriptions')
      return;
    }
    setPage('home')

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
        <div>home page</div>
      )}
    </Layout>
  )
}

export default DashPage
