import * as React from "react";
import { useEffect, ReactNode } from "react";
import { navigate } from "gatsby";

import useAuth from "../hooks/useAuth";

export default function AuthContent({ children }: { children: ReactNode }) {
  const { loggedIn, loading, user } = useAuth();
  const isBrowser = typeof window !== "undefined";
  // Navigate unauthenticated users to Log In page.
  useEffect(() => {
    if (!loading && !loggedIn) {
      if (isBrowser) {
        localStorage.removeItem("auth")
      }
      navigate('/log-in');
    }
  }, [loggedIn, loading, navigate]);

  if (loggedIn) {
    if (isBrowser) {
      const authData = {
        authToken: user.jwtAuthToken
      };
      localStorage.setItem("auth", JSON.stringify(authData));
    }
    return <>{children}</>;
  }

  return <p>Loading...</p>;
}
