import React from 'react';

import { useState , useEffect } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { navigate } from 'gatsby';
import Footer from "../components/Footer";
import DOMPurify from 'dompurify';
const hatsCat = ( props ) => {

  const { pageContext: { id, title, content } } = props;
    const [loadingBought, setLoadingBought] = useState(false)
    const [postBody, setPostBody] = useState(null)
    const sanitizedData = (sendData) => ({
      __html: DOMPurify.sanitize(sendData)
    })
    useEffect(() => {
     setPostBody(content)
           

    }, []);



      return (
          <>
          <Layout htmlClassName={"scroll"}>
        <Navbar />
            <div class='ee-home'>
                <h2>{title}</h2>
                
                    <>

                    <div class='content-cont-cont'>
                    {postBody === null ? (
                        <></>
                      ): (
                        <div dangerouslySetInnerHTML={sanitizedData(postBody)} class='content-to-set'></div>
                      )}
                     
        
                    </div>
                </>
                
     
     <div onClick={() =>navigate('/everything-entrepreneurial')} class='return-to-email'>Go Back</div>        
     <Footer/>
            </div>


            </Layout>
          </>
      )

}



export default hatsCat;
