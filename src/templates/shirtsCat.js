import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import DOMPurify from 'dompurify';
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ProductLister from "../components/ProductLister";

import HeroRender from "../components/HeroRender";
import StarRating from '../components/StarRating';
import ImageGallery from 'react-image-gallery';
import AuthContent from "../components/AuthContent";
import WriteReview from "../components/WriteReview";
import { navigate } from 'gatsby';

function slugify(text) {
    return text
      .toString()                          
      .normalize('NFKD')           
      .toLowerCase()                  
      .trim()    
        .replace('×', 'x')
        .replace(/\./g, '-')
      .replace(/\//ig, '-') 
      .replace(/\s+/g, '-')            
      .replace(/[^\w\-]+/g, '')     
      .replace(/\-\-+/g, '-')
      .concat(' ');        
  }

const hatsCat = ( props ) => {
    const { pageContext: { pagedata } } = props;
    const [activeTag, setActiveTag] = useState("all")

const restartAnimation = () => {
    for (const animation of document.getElementsByClassName('all-products-cont')[0].getAnimations()) {
        if (document.getElementsByClassName('all-products-cont')[0].contains((animation.effect).target)) {
          animation.cancel();
          animation.play();
        }
      }
}
    const onClick1 = () => {
        setActiveTag("all")
        restartAnimation()
    }
    const onClick2 = () => {
        setActiveTag("denim")
        restartAnimation()
    }
    const onClick3 = () => {
        setActiveTag("hats")
        restartAnimation()
    }
    const onClick4 = () => {
        setActiveTag("beanies")
        restartAnimation()
    }
   
    console.log(pagedata)
    const goToShop = () => {
        navigate('/shop')
    }
    const goToHome = () => {
        navigate('/')
    }
    const changePage = (e) => {
        console.log(e)
        console.log(e.target.dataset.idlink)
        navigate(e.target.dataset.idlink)
    }
    return (
        <Layout htmlClassName={"scroll"}>
        <Navbar />
        <div>
        <div class='breadcrumbs-cont'>
                    <div onClick={goToHome} class='bread-item bread-home'>Home</div>
                    <div onClick={goToShop} class='bread-item'>Shop</div>
                    <div class='bread-item bread-active'>Hats</div>
                </div>
            <h1 class='cat-page-header'>Revival of Revenue Hats Collection<span>Show off your fresh Entrepreneurial fits in style with our exclusive hats and beanies.</span></h1>
            <h2 class='featured-header'>Featured Hats</h2>
            <h4 class='featured-subheader'>Our top picks for entrepreneurs of all walks of life</h4>
            <div class='cat-gallery-cont'>

            <HeroRender herodata={pagedata}/>
            </div>

            <h3>All Hats</h3>
            <h4 class='all-subheader'>Browse all of our hats to find the one for you</h4>
            <div class={`all-shirts-cont ${activeTag}`}>
                <div class={`tag-cont ${activeTag.replace("'", '').replace(' ', '')}`}>
                    <div onClick={onClick1} class='ind-tag tag-all'>All</div><div onClick={onClick2} class='ind-tag tag-denim'>Denim</div><div onClick={onClick3} class='ind-tag tag-hats'>Hats</div><div onClick={onClick4} class='ind-tag tag-beanies'>Beanies</div>
                </div>
                <div class='all-products-cont'>
                    {pagedata.data.products.edges.map(item =>
        <div onClick={changePage} data-idlink={item.node.slug} class={`mini-product-cont ${item.node.productTags.edges.map(tags => slugify(tags.node.name) ).join('')}`}>
        <img src={item.node.featuredImage.node.sourceUrl}/>
        <div class='mini-title'>{item.node.name}</div>
        <div class='mini-review'>{<StarRating total={item.node.averageRating}/>}</div>
        <div class='mini-price'>{item.node.price}</div>
        </div>
   )}    
                </div>

            </div>

        </div>


        </Layout>
    )


}

export default hatsCat;
