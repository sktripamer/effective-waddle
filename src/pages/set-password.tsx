import * as React from "react";

import Layout from "../components/Layout";
import SetPasswordForm from "../components/SetPasswordForm";
const isBrowser = typeof window !== "undefined";
export default function SetPassword() {
  if (isBrowser) {
  const params = new URLSearchParams(window.location.search);
  const resetKey = params.get('key') || '';
  const login = params.get('login') || '';
  return (
    <Layout>
      <h1>Set Password</h1>
      <SetPasswordForm resetKey={resetKey} login={login} />
    </Layout>
  )
  } else {
    const params = '';
    const resetKey = '';
    const login = '';
    return (
      <Layout>
        <h1>Set Password</h1>
        <SetPasswordForm resetKey={resetKey} login={login} />
      </Layout>
    )
  }

  
}
