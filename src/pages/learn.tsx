import * as React from "react";
import { useState, useEffect } from "react";
import { navigate } from "gatsby"
import Layout from "../components/Layout";
import Nav from "../components/LearnNav";
import GetOrders from "../components/GetOrders";
import GetSubscriptions from "../components/GetSubscriptions";
import AuthContent from "../components/AuthContent";
import GetHome from "../components/GetDashboard"
import GetPayments from "../components/GetPayments"
import ProfileForm from "../components/ProfileForm";
import GetCourses from "../components/GetCourses"
// styles


// data

// markup
const DashPage = () => {
  const [page, setPage] = useState('dashboard');

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
    if (window.location.href.indexOf("payments") > -1) {
      setPage('payments')
      return;
    }
    if (window.location.href.indexOf("profile") > -1) {
      setPage('profile')
      return;
    }
    if (window.location.href.indexOf("courses") > -1) {
      setPage('courses')
      return;
    }
    navigate("#home")

  }, []);


  return (
    <Layout htmlClassName={"dashboard"}>
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

      {page === 'payments' && (
         <AuthContent>
         <GetPayments/>
       </AuthContent>
      )}

      {page === 'dashboard' && (
         <GetHome/>
      )}
       {page === 'profile' && (
         <AuthContent>
         <ProfileForm/>
       </AuthContent>
      )}
      {page === 'courses' && (
         <AuthContent>
         <GetCourses/>
       </AuthContent>
      )}
    </Layout>
  )
}

export default DashPage
