import * as React from "react";
import { useState, useEffect, ReactNode } from "react";
import { navigate } from "gatsby";

import useAuth from "../hooks/useAuth";

export default function Verify() {
    const { loggedIn, loading, user } = useAuth();
    const isBrowser = typeof window !== "undefined";
    const [email, SetEmail] = useState(null);
    const [verifyCode, setVerifyCode] = useState(null);
    let emailParam;
    let codeParam;

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        emailParam = params.get("e");
        codeParam = params.get("c");
        SetEmail(emailParam);
        setVerifyCode(codeParam);
    }, []);

    if (loading) return <p>Loading...</p>;
    
  if (loggedIn) {
    if (user.url.includes('notregistered')) {
      //pull vars from url. if vars dont exist, show "send verification email" button.
    console.log(emailParam)
    console.log(codeParam)
    } else {
      navigate('/dashboard')
    }

  } else {
    console.log(emailParam)
    console.log(codeParam)
      //user not logged in. pull vars from url.
      //if no vars exist, show some stuff about logging in or registering
  }

}
