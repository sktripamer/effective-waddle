import * as React from "react";
import { useEffect } from "react";
import useAuth, { User } from "../hooks/useAuth";
import { navigate } from 'gatsby';
import CourseOverview from '../components/CourseOverview';


export default function GetHome() {
  useEffect(() => {
    if (window.location.href.indexOf("dashboard") === -1) {
      window.location.reload();
    }
  });
  const { loggedIn, loading, user } = useAuth();
  const { id } = user;

  return (
    <div className='sub-list'>
        <CourseOverview/>
    </div>
  );
}
