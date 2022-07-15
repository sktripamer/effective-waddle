import * as React from "react";
import { useState, useEffect } from "react";
import { navigate } from "gatsby"
import Layout from "../components/Layout";
import Nav from "../components/LearnNav";
import GetOrders from "../components/GetOrders";
import GetSubscriptions from "../components/GetSubscriptions";
import AuthContent from "../components/AuthContent";
import GetHome from "../components/GetDashboard"
import GetRevRev from "../components/GetRevRev"
import GetRevMap from "../components/GetRevMap"
import GetMini from "../components/GetMini"
import GetPayments from "../components/GetPayments"
import ProfileForm from "../components/ProfileForm";
import GetCourses from "../components/GetCourses"
// styles


// data

// markup
const DashPage = () => {
  const [page, setPage] = useState('');

  useEffect(() => {

    if (window.location.href.indexOf("orders") > -1) {
        setPage('orders')
        return;
    }
    if (window.location.href.indexOf("subscriptions") > -1) {
      setPage('subscriptions')
      return;
    }
    // if (window.location.href.indexOf("dashboard") > -1) {
    //   setPage('dashboard')
    //   return;
    // }
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
    //navigate("#dashboard")

  }, []);


  return (
    <Layout htmlClassName={"learndash"}>
      <Nav changePage={page => setPage(page)} classPass={page}/>
      {page === 'revrev-courses' && (
          <GetRevRev/>
      )}
      
      {page === 'mini-courses' && (
       <GetMini/>
      )}

      {page === 'revenue-maps' && (
      <GetRevMap/>
      )}

      {page === '' && (
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
