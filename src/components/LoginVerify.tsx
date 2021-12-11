import * as React from "react";
import { useEffect, ReactNode } from "react";
import useAuth from "../hooks/useAuth";

export default function LoginVerify() {
  const { loggedIn, loading } = useAuth();

  // Navigate authenticated users to Members page.
  useEffect(() => {
    if (!loading && loggedIn) {


    }
  }, [loggedIn, loading]);

  if (!loggedIn) {
    return <p>logged in</p>;
  }

  return <p>Loading...</p>;
}
