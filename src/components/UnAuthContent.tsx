import * as React from "react";
import { useEffect, ReactNode } from "react";
import { navigate } from "gatsby";

import useAuth from "../hooks/useAuth";

export default function UnAuthContent({ children }: { children: ReactNode }) {
  const { loggedIn, loading, user } = useAuth();
  const isBrowser = typeof window !== "undefined";
  // Navigate authenticated users to Members page.
  useEffect(() => {
    if (!loading && loggedIn) {
      if (isBrowser) {
        localStorage.setItem("auth", JSON.stringify(user.jwtAuthToken));
      }
      navigate('/members');
    }
  }, [loggedIn, loading, navigate]);

  if (!loggedIn) {
    if (isBrowser) {
      localStorage.removeItem("auth")
    }
    return <>{children}</>;
  }

  return <p>Loading...</p>;
}
