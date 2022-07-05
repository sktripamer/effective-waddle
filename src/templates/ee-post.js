import React from 'react';

import { useState , useEffect } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { navigate } from 'gatsby';
import DOMPurify from 'dompurify';
const hatsCat = ( props ) => {

  const { pageContext: { id,title } } = props;
    const [loadingBought, setLoadingBought] = useState(true)
    const [bought, setBought] = useState(false)
    const [postBody, setPostBody] = useState(null)
    const sanitizedData = (sendData) => ({
      __html: DOMPurify.sanitize(sendData)
    })
    const email = function() {
        try {
          return JSON.parse(localStorage.auth).authToken;
        } catch {
          return null;
        }
      }

    useEffect(() => {
      
        async function fetchMyAPI() {
          try {
            if (email() === null) {
              console.log('nothing')
              return;
            }
           let sendBody = {
                token: email(),
                post: id,
                product: 1735
            }

            const request = await fetch('/api/get-ee', {
              method: 'POST',
              body: JSON.stringify(sendBody),
            });
            const intent = (await request.json());
            console.log(intent)

            if (intent.customerID.success === 1) {
              setPostBody(intent.customerID.message)
                setBought(true)
            }

            setLoadingBought(false)
          } catch (error) {
            navigate('/log-in')
            return null;
          }
        
        }
        fetchMyAPI()

      }, []);

      const preReveal = () => {

        navigate('/shop/courses/entrepreneurial-espresso-subscription')
    }


      return (
          <>
          <Layout htmlClassName={"scroll"}>
        <Navbar />
            <div class='ee-home'>
                <h2>{title}</h2>
                {loadingBought === false ? (
                    <div class='loader-white'></div>
                ) : (
                    <>

                {bought === false ? (
                    <>
                    <div class='ee-optin'>Get access to this exclusive content!</div>
                    <div onClick={() => preReveal} class="y-preorderbtn">Get Access</div>
                    </>
                ): (
                    <>
                    </>
                )}

                    <div class='content-cont-cont'>
                      {postBody === null ? (
                        <></>
                      ): (
                        <div dangerouslySetInnerHTML={sanitizedData(postBody)} class='content-to-set'></div>
                      )}
                     
                        
                    </div>
                </>
                )}
     
     <div onClick={() =>navigate('/entrepreneurial-espresso')} class='return-to-email'>Go Back</div>        

            </div>


            </Layout>
          </>
      )

}



export default hatsCat;
