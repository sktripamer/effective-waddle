import * as React from "react";
import {useState, useEffect } from "react";
import navigate from "gatsby";
import useAuth, { User } from "../hooks/useAuth";


export default function GetCourses() {
  const { user } = useAuth();
  const { jwtAuthToken } = user as User;
  const [methodProcessing, setMethodProcessing] = useState(true);
  const [arrayTest, setArray] = useState({});
  function slugify(text) {
    return text
      .toString()                           // Cast to string (optional)
      .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
      .toLowerCase()                  // Convert the string to lowercase letters
      .trim()    
        .replace('×', 'x')
        .replace(/\./g, '-')
      .replace(/\//ig, '-') 
      .replace(/\s+/g, '-')            // Replace spaces with -
      .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
      .replace(/\-\-+/g, '-');        // Replace multiple - with single -
  }


  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const request = await fetch('/api/get-courses', {
          method: 'POST',
          body: jwtAuthToken,
        });
        const intent = (await request.json());
        console.log(intent)
        setArray(intent.customerID.message);
          setMethodProcessing(false)
      } catch (error) {
        setArray([
          {
              "data": {
                  "status": ""
              },
              "title": "No courses added!"
          }
      ]);
        console.log('Failed to get cID');
        console.log(error);
        return null;
      }
    
    }
    fetchMyAPI()
  }, []);
  useEffect(() => {
    if (window.location.href.indexOf("courses") === -1) {
      window.location.reload();
    }
  });
  console.log(arrayTest)
  const getButtonId = (e) => {
    console.log(e.target.dataset.id)
  }
  return (
    <div className='sub-list'>
        <h2>Subscriptions</h2>
       {methodProcessing ? (
            <div class='subloading'>Loading courses...</div>
          ) : (
            <div class='course-list'>
               {arrayTest && arrayTest.map((el, index) =>
                  <>
                  <div className={'course-item'}>
                    <div className={`course-img ${slugify(el.title)}`}></div>
                    {el.data.status === 'in_progress' ? (
                      <div class='course-status in-progress'>IN PROGRESS</div>
                    ) : ('')}
                      {el.data.status === 'not_started' ? (
                      <div class='course-status not-started'>NOT STARTED</div>
                    ) : ('')}
                    {el.data.status === 'completed' ? (
                      <div class='course-status course-complete'>COMPLETED</div>
                    ) : ('')}
                    <div className='course-info'>{el.title}</div>
                    <div className={`course-lessons ${el.data.status}`}>{el.data.completed}/{el.data.total} Lessons</div>
                    {el.data.status === 'not_started' ? (
                    
                     <a class='course-btn btn-start' href={`https://portal.revrevdev.xyz/courses/${slugify(el.title)}`} target="_blank" rel="noreferrer noopener">Start Course</a>
                    ) : ('')}
                     {el.data.status === 'in_progress' ? (
                     <a class='course-btn btn-continue' href={`https://portal.revrevdev.xyz/courses/${slugify(el.title)}`} target="_blank" rel="noreferrer noopener">Continue Course</a>
                    ) : ('')}
                      {el.data.status === 'completed' ? (
                     <a class='course-btn btn-finished' href={`https://portal.revrevdev.xyz/courses/${slugify(el.title)}`} target="_blank" rel="noreferrer noopener">Review Course</a>
                    ) : ('')}
                 </div>
                  </>
)}
</div>
            )}
   <button onClick={navigate('/shop/courses')} class='view-all-courses'>View All Courses</button>
    </div>
  );

}
