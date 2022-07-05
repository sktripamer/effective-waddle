import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { navigate } from 'gatsby';

const hatsCat = ( props ) => {

    const { pageContext: { pagedata } } = props;
    const [loadingBought, setLoadingBought] = useState(false)
    const [bought, setBought] = useState('')

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
                product: 1735
            }

            const request = await fetch('/api/has-bought', {
              method: 'POST',
              body: JSON.stringify(sendBody),
            });
            const intent = (await request.json());
            console.log(intent)

            if (intent.customerID.success === 1) {
                setBought(true)
                setLoadingBought(true)
            } else {
                setBought(false)
                setLoadingBought(false)
            }

           
          } catch (error) {
            console.log('Failed to get cID');
            console.log(error);
            return null;
          }
        
        }
        fetchMyAPI()

      }, []);

      const preReveal = () => {

        navigate('/shop/courses/entrepreneurial-espresso-subscription')
    }
      const changePage = (slug) => {
        let temp = '/entrepreneurial-espresso/' + slug
        navigate(temp)
    }

      return (
          <>
          <Layout htmlClassName={"scroll"}>
        <Navbar />
            <div class='ee-home'>
                <h2>Entrepreneurial Espresso</h2>
                <h3>Exclusive content to fuel your daily life</h3>
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

                    <div class={`all-products-cont ee-${bought}`}>
                    {pagedata.data.posts.edges.map(item =>
                        <div onClick={() => changePage(item.node.slug)} class={`mini-product-cont`}>
                            <img src={`https://portal.revrevdev.xyz/wp-content/uploads/2022/06/course.jpg`}/>
                            <div class='mini-title'>{item.node.title}</div>
                        </div>
                    )}
                </div>   
                </>
                )}
     


            </div>


            </Layout>
          </>
      )

}



export default hatsCat;
