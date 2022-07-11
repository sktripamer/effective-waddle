import * as React from "react";
import { useEffect } from "react";

import { navigate } from 'gatsby';
import CourseOverview from '../components/CourseOverview';


export default function GetHome() {
  useEffect(() => {
    if (window.location.href.indexOf("dashboard") === -1) {
      window.location.reload();
    }
  });


  return (
    <div className='sub-list'>
        <CourseOverview/>
    </div>
  );
}
