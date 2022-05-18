import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import DOMPurify from 'dompurify';
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ImageGallery from 'react-image-gallery';
import AuthContent from "../components/AuthContent";
import WriteReview from "../components/WriteReview";


const hatsCat = ( props ) => {
    const { pageContext: { pagedata } } = props;


    const heroRenderer = (item) => {
        return (
            <div className='image-gallery-image'>
              <img
                  src={item.original}
              />
      
              {
                item.title &&
                  <span className='image-gallery-description'>
                    {item.title}
                    {
                      item.link &&
                        <a className='my-own-class' href={item.link}>
                          {item.title}
                        </a>
                    }
                  </span>
              }
              <span className='image-gallery-price'>
                {item.price}
              </span>
            </div>
          )


    }
    let items = [];

    useEffect(() => {
        pagedata.data.products.edges.forEach( edge => {
            if (edge.node.featured === true) {
                let tempObj = {
                    "original": edge.node.featuredImage.node.sourceUrl,
                    "thumbnail": edge.node.featuredImage.node.sourceUrl,
                    "title": edge.node.name,
                    "link": edge.node.slug,
                    "price": edge.node.price,
                    "renderItem": heroRenderer
                }
                items.push(tempObj)
            }
        })
    }, []);



    console.log(pagedata)

    return (
        <Layout>
        <Navbar />
        <div>
        <h1>Revival of Revenue Shirts Collection</h1>
        <ImageGallery items={items}/>



        </div>



        {/* <div>{JSON.stringify(pagedata)}</div> */}

        </Layout>
    )


}

export default hatsCat;
