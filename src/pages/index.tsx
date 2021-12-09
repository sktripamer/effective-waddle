import React, { useState, useEffect } from "react";
import { isEmpty } from 'lodash';
import Layout from "../components/Layout";
import CustomizableVideoPlayer from '@folly-systems/custom-react-player'
import useAuth from "../hooks/useAuth";
import SignUpForm from "../components/SignUpForm";

// markup
const IndexPage = () => {
  const { loggedIn, loading } = useAuth();
	//const [loggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
	const [activate, setActivate] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [showAlertBar, setShowAlertBar] = useState(true);
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
      if (currentTime > 3 && isLoggedIn === false ) {
        console.log('yes')
        setPlaying({status: false, time: 2.99, speed: speed})
        setSuccessMessage('3 seconds now')
      }
      console.log(currentTime)
      console.log(isPlaying)
      
  
      };


  


      useEffect(() => {
        
    
        if (!loading && loggedIn) {
        setLoggedIn(true);
        }
      }, [loggedIn, loading]);


      return (
        <Layout>
           
      <div class='rev-player'>
      {"" !== successMessage
            ? showAlertBar && (
              <SignUpForm/>
           
    
              )
            : ""}
      {  typeof window !== 'undefined' && CustomizableVideoPlayer && <CustomizableVideoPlayer url={videoLink} playing={playing} getVideoProgressDetails={storeVideoDetailFunctions} onVideoProgress={handleVideoProgress} /> }
    </div>

          
        </Layout>
      )

}

export default IndexPage
