import * as React from "react";
import { useState, useEffect } from "react";
import useAuth, { User } from "../hooks/useAuth";
import { navigate } from 'gatsby';



export default function CourseOverview({ courseData, cat}) {
  const [loadingCourses, setLoadingCourses] = useState(true)
  const [genericError, setGenericError] = useState(false)

  const [noCourses, setNoCourses] = useState(true)
  const [activeTag, setActiveTag] = useState("in-progress")



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

  const restartAnimation = () => {
    for (const animation of document.getElementsByClassName('course-slider-cont')[0].getAnimations()) {
        if (document.getElementsByClassName('course-slider-cont')[0].contains((animation.effect).target)) {
          animation.cancel();
          animation.play();
        }
      }
}
  const onClick1 = () => {
    setActiveTag("in-progress")
    restartAnimation()
  }
  const onClick2 = () => {
      setActiveTag("completed")
      restartAnimation()
  }
  const onClick3 = () => {
      setActiveTag("all")
      restartAnimation()
  }
  return (
  <>
  {loadingCourses === true ? (
      <div class='load-false coursesection'></div>
  ): (
    <>

      {genericError === true ? (
        'generic error'
      ):null}

      {noCourses === true ? (
        'no courses'
      ): (
        <>
        <div class='mycourse-header'>
        <div class='unlockedcourse-header'>
          <h1 class="unlockedcourses-page-header">My Courses<span>Continue where you left off on your unlocked courses</span></h1> 
          </div>
          </div>
        <div class={`ownedcourse-slider ${activeTag}`}>
          <div class='tag-cont-cont-owned'>
          <div class={`tag-cont ${activeTag.replace("'", '').replace(' ', '')}`}>
              <div onClick={onClick1} class='ind-tag tag-in-progress'>In Progress</div><div onClick={onClick2} class='ind-tag tag-completed'>Completed</div><div onClick={onClick3} class='ind-tag tag-all'>All Courses</div>
          </div>
          </div>
          {courseData.length > 0 ? (
              <>
              <div class='course-slider-cont-cont'>
              <div class='course-slider-cont'>
                {courseData.map((el) => 
                  <>

                  {cat === 'all' ? (
                    <>
                      {el.cat !== 'Espresso' ? (
                      <>
                      
                  <div class={`coursebox-cont ${el.data.status}`}>
                    <div class='coursebox-top'>
                      <div class='coursebox-image-cont'>
                        <div style={Object.assign({'background-image': `url(${el.image})` })} class='courseboximg'></div>
                      </div>
                      <div className='course-info'>{el.title}</div>
                      <div className='course-desc'>{el.description}</div>
                    </div>
                    <div class='coursebox-bot'>
                      {el.data.status === 'not_started' ? (
                          <a class='course-btn btn-start' href={`https://portal.revrevdev.xyz/courses/${slugify(el.title)}`} target="_blank" rel="noreferrer noopener">Start Course</a>
                      ) : ('')}
                          {el.data.status === 'in_progress' ? (
                          <a class='course-btn btn-continue' href={`https://portal.revrevdev.xyz/courses/${slugify(el.title)}`} target="_blank" rel="noreferrer noopener">Continue Course</a>
                      ) : ('')}
                          {el.data.status === 'completed' ? (
                          <a class='course-btn btn-finished' href={`https://portal.revrevdev.xyz/courses/${slugify(el.title)}`} target="_blank" rel="noreferrer noopener">Review Course</a>
                      ) : ('')}
                      <div class="progressbar">
                        <div style={Object.assign({width: `${Math.round((el.data.completed / el.data.total) * 100)}%` })} class="bar-filler">{`${Math.round((el.data.completed / el.data.total) * 100)}%`}</div>
                      </div>
                    </div>
                  </div>
                      </>
                      ): (
                      <>
                      </>
                      )}
                    </>
                  ): (
                    <>
                     {el.cat === cat ? (
                    <>
                    
                  <div class={`coursebox-cont ${el.data.status}`}>
                    <div class='coursebox-top'>
                      <div class='coursebox-image-cont'>
                        <div style={Object.assign({'background-image': `url(${el.image})` })} class='courseboximg'></div>
                      </div>
                      <div className='course-info'>{el.title}</div>
                      <div className='course-desc'>{el.description}</div>
                    </div>
                    <div class='coursebox-bot'>
                      {el.data.status === 'not_started' ? (
                          <a class='course-btn btn-start' href={`https://portal.revrevdev.xyz/courses/${slugify(el.title)}`} target="_blank" rel="noreferrer noopener">Start Course</a>
                      ) : ('')}
                          {el.data.status === 'in_progress' ? (
                          <a class='course-btn btn-continue' href={`https://portal.revrevdev.xyz/courses/${slugify(el.title)}`} target="_blank" rel="noreferrer noopener">Continue Course</a>
                      ) : ('')}
                          {el.data.status === 'completed' ? (
                          <a class='course-btn btn-finished' href={`https://portal.revrevdev.xyz/courses/${slugify(el.title)}`} target="_blank" rel="noreferrer noopener">Review Course</a>
                      ) : ('')}
                      <div class="progressbar">
                        <div style={Object.assign({width: `${Math.round((el.data.completed / el.data.total) * 100)}%` })} class="bar-filler">{`${Math.round((el.data.completed / el.data.total) * 100)}%`}</div>
                      </div>
                    </div>
                  </div>
                    </>
                  ): (
                    <>
                    </>
                  )}
                    </>
                  )}
                  
                 




                  </>
                )}
              </div>
              </div>
              </>
          ):('no course data')}

        </div>
        </>
      )}


    </>
  )}


  </>
  );
}
