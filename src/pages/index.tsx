import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CustomizableVideoPlayer from '@folly-systems/custom-react-player'
import useAuth from "../hooks/useAuth";
//import UnAuthContent from "../components/UnAuthContent";
import { isEmpty, remove } from 'lodash';
import SignUpForm from "../components/SignUpForm";
import RegisterOpt from "../components/RegisterOpt";
import UnAuthContent from "../components/UnAuthContent";
//import LoginVerify from "../components/LoginVerify";
import { useBetween } from "use-between";
// markup

const useShareableState = () => {

  const [count, setCount] = useState(false);
  return {
    count,
    setCount
  };
};

const IndexPage = () => {


	const [loggedIn, setLoggedIn] = useState({});
  const [loggedIn2, setLoggedIn2] = useState(false);
  //const [isLoggedIn, setLoggedIn] = useState(false);
	const [activate, setActivate] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [showAlertBar, setShowAlertBar] = useState(true);
  const isBrowser = typeof window !== "undefined";
  
  // const useMountEffect = (fun) => useEffect(fun, [setLoggedIn])
  // Check if the user is validated already.
  // useMountEffect(LoginVerify)
  useEffect(() => {
    if (undefined !== window) {
      console.log('heyyy')
      console.log(loggedIn)
      let authTokenData = localStorage.getItem("auth");
  
      if (!isEmpty(authTokenData)) {
        console.log('heyyy1')
        console.log(loggedIn)
        authTokenData = JSON.parse(authTokenData);
  
        if (!isEmpty(authTokenData.authToken)) {
          setLoggedIn(true)
          console.log('heyyy2')
          console.log(loggedIn)
        } else {
          console.log('empty')
        }
      }
    } // // this will fire only when loadDataOnlyOnce-reference changes
}, [loggedIn, setLoggedIn]);




	const videoLink = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  const [playing, setPlaying] = useState({
		time: 0,
		status: false,
		speed: 1,
	  });
    const [videoProgressFunctions, setVideoProgressFunctions] = useState({
      getPlayingStatus: null,
      getCurrentTime: null,
      getPlaybackSpeed: null,
      });
    
      const [videoDetails, setVideoDetails] = useState({
      currentTime: 0,
      isPlaying: 0,
      speed: 1,
      totalTime: 0,
      });
  
      
      const handlePlayPause = (status) => () => {
      setPlaying({
        status,
        time: videoProgressFunctions.getCurrentTime?.() || playing.time,
        speed: videoProgressFunctions.getPlaybackSpeed?.() || playing.speed,
      });
      };
  
      const handlePlaybackSpeedChange = (speed) => () => {
      setPlaying({
        speed,
        time: videoProgressFunctions.getCurrentTime?.() || playing.time,
        status: videoProgressFunctions.getPlayingStatus?.() || playing.status,
      });
      };
    
      const storeVideoDetailFunctions = ({
      getPlaybackSpeed,
      getCurrentTime,
      getPlayingStatus,
      }) => {
      setVideoProgressFunctions({
        getPlayingStatus: getPlayingStatus,
        getCurrentTime: getCurrentTime,
        getPlaybackSpeed: getPlaybackSpeed,
      });
      };
  
      const handleVideoProgress = ({
      currentTime,
      isPlaying,
      speed,
      totalTime,
      }) => {
      setVideoDetails({ currentTime, isPlaying, speed, totalTime });
      if (currentTime > 3 && loggedIn === false ) {
    //if (currentTime > 3 ) {
        console.log('yes')
        setPlaying({status: false, time: 2.99, speed: speed})
        setSuccessMessage('3 seconds now')
      }
      console.log(currentTime)
      console.log(isPlaying)
      console.log(loggedIn)
      
      };


  





      return (
        <Layout>

    
      <div class='rev-player'>
      {"" !== successMessage
            ? showAlertBar && (
                
              <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
             
              // <RegisterOpt setLoggedIn={setLoggedIn} />  
    
              )
            : ""}
      {  typeof window !== 'undefined' && CustomizableVideoPlayer && <CustomizableVideoPlayer url={videoLink} playing={playing} getVideoProgressDetails={storeVideoDetailFunctions} onVideoProgress={handleVideoProgress} /> }
    </div>

          
        </Layout>
      )

}

export default IndexPage
