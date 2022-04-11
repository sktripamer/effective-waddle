import * as React from "react";
import {useState, useEffect } from "react";

import useAuth, { User } from "../hooks/useAuth";


export default function GetCourses() {
  const { user } = useAuth();
  const { jwtAuthToken } = user as User;
  const [methodProcessing, setMethodProcessing] = useState(true);
  const [arrayTest, setArray] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const request = await fetch('/api/get-courses', {
          method: 'POST',
          body: jwtAuthToken,
        });
        const intent = (await request.json());
        console.log(intent)
        setArray(intent.message);
          setMethodProcessing(false)
      } catch (error) {
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
    <div className='courses-list'>

       {methodProcessing ? (
            <div>loading courses...</div>
          ) : (
            <div class='course-list'>
               {arrayTest && arrayTest.map((el, index) =>
                  <>
                  <div className={'course-item'}>
                  <div className='course-complete'>{el.data.status}</div>
                  <div className='course-info'>{el.title}</div>
    </div>
                  </>
)}
</div>
            )}
   
    </div>
  );

}
