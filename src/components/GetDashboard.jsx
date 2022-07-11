import * as React from "react";
import { useState, useEffect } from "react";

import { navigate } from 'gatsby';
import CourseOverview from '../components/CourseOverview';
import RevRevCourseSmallList from '../components/RevRevCourseSmallList';

export default function GetHome() {
const [loadingCourses, setLoadingCourses] = useState(true)
const [genericError, setGenericError] = useState(false)
const [courseData, setCourseData] = useState([])
  useEffect(() => {
    if (window.location.href.indexOf("dashboard") === -1) {
      window.location.reload();
    }
  });
  useEffect(() => {
    async function fetchMyAPI() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); 
      try {
        const request = await fetch('https://portal.revrevdev.xyz/wp-json/rev-process/courseoffers', {
          method: 'POST',
          signal: controller.signal,
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const courses = (await request.json());
        console.log(courses)
       setLoadingCourses(false)
       setCourseData(courses)
      } catch (error) {
        console.log(error)
        setGenericError(true)
        setLoadingCourses(false)
      }
      clearTimeout(timeoutId);
    }
    fetchMyAPI()
  }, []);

  return (
    <div className='sub-list'>
        <CourseOverview/>
        
        {courseData.length > 0 ? (
          <>
            <RevRevCourseSmallList courseData={courseData} />
          </>
        ):null}
    </div>
  );
}
