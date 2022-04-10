import * as React from "react";
import { useEffect } from "react";
import useAuth, { User } from "../hooks/useAuth";




export default function GetHome() {
  useEffect(() => {
    if (window.location.href.indexOf("home") === -1) {
      window.location.reload();
    }
  });
  const { user } = useAuth();
  const { id } = user as User;

  return (<div>
    <h1>Welcome back!</h1>
    <div>News</div>
    <div>Your latest order</div>
    <div>My Courses</div>
    <div>Browse Courses</div>
    <div>contact us for help</div>
</div>);
}
