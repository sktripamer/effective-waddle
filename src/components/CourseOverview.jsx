import * as React from "react";
import { useState, useEffect } from "react";
import useAuth, { User } from "../hooks/useAuth";
import { navigate } from 'gatsby';



export default function CourseOverview() {
  const [loadingCourses, setLoadingCourses] = useState(true)
  const [genericError, setGenericError] = useState(false)
  const [courseData, setCourseData] = useState([])
  const [noCourses, setNoCourses] = useState(true)
  useEffect(() => {
    async function fetchMyAPI() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); 
      try {
        const request = await fetch('https://portal.revrevdev.xyz/wp-json/rev-process/learn', {
          method: 'POST',
          signal: controller.signal,
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const courses = (await request.json());
        console.log(courses)
        if (courses !== false) {
          setNoCourses(false)
          setCourseData(courses)
        }
       setLoadingCourses(false)
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
  <>
  {loadingCourses === true ? (
    'loading'
  ): (
    <>

      {genericError === true ? (
        'generic error'
      ):null}

      {noCourses === true ? (
        'no courses'
      ): (
        <>
          {courseData.length > 0 ? (
              <>
              {console.log('aa', courseData)}
              <p>plenty of data here</p>
              </>
          ):('no course data')}


        </>
      )}


    </>
  )}


  </>
  );
}
