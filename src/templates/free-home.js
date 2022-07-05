import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { navigate } from 'gatsby';

const hatsCat = ( props ) => {

    const { pageContext: { pagedata } } = props;




      const changePage = (slug) => {
        let temp = '/everything-entrepreneurial/' + slug
        navigate(temp)
    }

      return (
          <>
          <Layout htmlClassName={"scroll"}>
        <Navbar />
            <div class='ee-home'>
                <h2>Everything Entrepreneurial</h2>
                <h3>Exclusive content to fuel your daily life</h3>
                 
                    <>

                    <div class={`all-products-cont ee-true`}>
                    {pagedata.data.posts.edges.map(item =>
                        <div onClick={() => changePage(item.node.slug)} class={`mini-product-cont`}>
                            <img src={item.node.featuredImage.node.sourceUrl}/>
                            <div class='mini-title'>{item.node.title}</div>
                        </div>
                    )}
                </div>   
                </>

            </div>


            </Layout>
          </>
      )

}



export default hatsCat;
