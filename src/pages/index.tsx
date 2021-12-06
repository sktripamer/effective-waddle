import React, { useState, useEffect } from "react";
import { isEmpty } from 'lodash';
import Layout from "../components/Layout";
import CustomizableVideoPlayer from '@folly-systems/custom-react-player'
import useAuth from "../hooks/useAuth";
import SignUpForm from "../components/SignUpForm";
// // styles
// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }
// const headingAccentStyles = {
//   color: "#663399",
// }
// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }
// const listStyles = {
//   marginBottom: 96,
//   paddingLeft: 0,
// }
// const listItemStyles = {
//   fontWeight: 300,
//   fontSize: 24,
//   maxWidth: 560,
//   marginBottom: 30,
// }

// const linkStyle = {
//   color: "#8954A8",
//   fontWeight: "bold",
//   fontSize: 16,
//   verticalAlign: "5%",
// }

// const docLinkStyle = {
//   ...linkStyle,
//   listStyleType: "none",
//   marginBottom: 24,
// }

// const descriptionStyle = {
//   color: "#232129",
//   fontSize: 14,
//   marginTop: 10,
//   marginBottom: 0,
//   lineHeight: 1.25,
// }

// const docLink = {
//   text: "Documentation",
//   url: "https://www.gatsbyjs.com/docs/",
//   color: "#8954A8",
// }

// const badgeStyle = {
//   color: "#fff",
//   backgroundColor: "#088413",
//   border: "1px solid #088413",
//   fontSize: 11,
//   fontWeight: "bold",
//   letterSpacing: 1,
//   borderRadius: 4,
//   padding: "4px 6px",
//   display: "inline-block",
//   position: "relative",
//   top: -2,
//   marginLeft: 10,
//   lineHeight: 1,
// }

// data
// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial/",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//     color: "#E95800",
//   },
//   {
//     text: "How to Guides",
//     url: "https://www.gatsbyjs.com/docs/how-to/",
//     description:
//       "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
//     color: "#1099A8",
//   },
//   {
//     text: "Reference Guides",
//     url: "https://www.gatsbyjs.com/docs/reference/",
//     description:
//       "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
//     color: "#BC027F",
//   },
//   {
//     text: "Conceptual Guides",
//     url: "https://www.gatsbyjs.com/docs/conceptual/",
//     description:
//       "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
//     color: "#0D96F2",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//     color: "#8EB814",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     badge: true,
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//     color: "#663399",
//   },
// ]

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
        const { loggedIn } = useAuth();
    
        if (loggedIn) {
        setLoggedIn(true);
        }
      }, [loggedIn]);


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
