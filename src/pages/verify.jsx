import * as React from "react";
import { useState, useEffect, ReactNode } from "react";
import { navigate } from "gatsby";

import useAuth from "../hooks/useAuth";

export default function Verify() {
    const { loggedIn, loading, user } = useAuth();
    const isBrowser = typeof window !== "undefined";
    const [email, SetEmail] = useState(null);
    const [verifyCode, setVerifyCode] = useState(null);
    const params = new URLSearchParams(location.search);
    const emailParam = params.get("e");
    const codeParam = params.get("c");

    // useEffect(() => {

    //     SetEmail(emailParam);
    //     setVerifyCode(codeParam);
    // }, []);

    if (loading) return <p>Loading...</p>;
    
  if (loggedIn) {
    if (user.url.includes('notregistered')) {
      //pull vars from url. if vars dont exist, show "send verification email" button.
    console.log(emailParam)
    console.log(codeParam)
    return <p>aa...</p>;
    } else {
      navigate('/dashboard')
    }

  } else {
    console.log(emailParam)
    console.log(codeParam)
    return <p>dd...</p>;
      //user not logged in. pull vars from url.
      //if no vars exist, show some stuff about logging in or registering
  }
  return <p>ww...</p>;
}
