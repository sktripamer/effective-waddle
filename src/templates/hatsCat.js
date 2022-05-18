import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import DOMPurify from 'dompurify';
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ProductLister from "../components/ProductLister";
import ImageGallery from 'react-image-gallery';
import AuthContent from "../components/AuthContent";
import WriteReview from "../components/WriteReview";


const hatsCat = ( props ) => {
    const { pageContext: { pagedata } } = props;
    const [activeTag, setActiveTag] = useState("all")

    const heroRenderer = (item) => {
        return (
            <div className='image-gallery-image'>
              <img
                  src={item.original}
                  srcSet={item.srcSet}
                    sizes={item.sizes}
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
                    "link": 'shirts/' + edge.node.slug,
                    "price": edge.node.price,
                    "renderItem": heroRenderer
                }
                items.push(tempObj)
            }
        })
    }, []);

    const onClick1 = () => {
        setActiveTag("all")
    }
    const onClick2 = () => {
        setActiveTag("T-shirts")
    }
    const onClick3 = () => {
        setActiveTag("Hoodies")
    }
    const onClick4 = () => {
        setActiveTag("Tank Tops")
    }
    const onClick5 = () => {
        setActiveTag("Long Sleeves")
    }
    const onClick6 = () => {
        setActiveTag("Polos")
    }
    const onClick7 = () => {
        setActiveTag("Men's")
    }
    const onClick8 = () => {
        setActiveTag("Women's")
    }
    console.log(pagedata)

    return (
        <Layout htmlClassName={"scroll"}>
        <Navbar />
        <div>
            <h1 class='cat-page-header'>Revival of Revenue Shirts Collection</h1>
            <h2 class='featured-header'>Featured Shirts</h2>
            <div class='cat-gallery-cont'>
            <ImageGallery showThumbnails={false} showFullscreenButton={false} showPlayButton={false} items={items}/>
            </div>

            <h3>All shirts</h3>
            <div class='all-shirts-cont'>
                <div class={`tag-cont ${activeTag.replace("'", '').replace(' ', '')}`}>
                    <div onClick={onClick1} class='ind-tag tag-all'>All</div><div onClick={onClick2} class='ind-tag tag-t-shirts'>T-shirts</div><div onClick={onClick3} class='ind-tag tag-hoodies'>Hoodies</div><div onClick={onClick4} class='ind-tag tag-tanktops'>Tank Tops</div><div onClick={onClick5} class='ind-tag tag-longsleeves'>Long Sleeves</div><div onClick={onClick6} class='ind-tag tag-polos'>Polos</div><div onClick={onClick7} class='ind-tag tag-mens'>Men's</div><div onClick={onClick8} class='ind-tag tag-womens'>Women's</div>
                </div>
                <div class='all-products-cont'>
                    <ProductLister allData={pagedata} filter={activeTag}/>
                </div>

            </div>

        </div>


        </Layout>
    )


}

export default hatsCat;
