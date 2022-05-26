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
        setActiveTag("t-shirts")
        restartAnimation()
    }
    const onClick3 = () => {
        setActiveTag("hoodies")
        restartAnimation()
    }
    const onClick4 = () => {
        setActiveTag("tank-tops")
        restartAnimation()
    }
    const onClick5 = () => {
        setActiveTag("long-sleeves")
        restartAnimation()
    }
    const onClick6 = () => {
        setActiveTag("polos")
        restartAnimation()
    }
    const onClick7 = () => {
        setActiveTag("mens")
        restartAnimation()
    }
    const onClick8 = () => {
        setActiveTag("womens")
        restartAnimation()
    }
    console.log(pagedata)
    const changePage = (e) => {
        console.log(e.target.dataset.idlink)
        navigate(e.target.dataset.idlink)
    }
    return (
        <Layout htmlClassName={"scroll"}>
        <Navbar />
        <div>
            <h1 class='cat-page-header'>Revival of Revenue Shirts Collection</h1>
            <h2 class='featured-header'>Featured Shirts</h2>
            <div class='cat-gallery-cont'>
            <HeroRender herodata={pagedata}/>
            </div>

            <h3>All shirts</h3>
            <div class={`all-shirts-cont ${activeTag}`}>
                <div class={`tag-cont ${activeTag.replace("'", '').replace(' ', '')}`}>
                    <div onClick={onClick1} class='ind-tag tag-all'>All</div><div onClick={onClick2} class='ind-tag tag-t-shirts'>T-shirts</div><div onClick={onClick3} class='ind-tag tag-hoodies'>Hoodies</div><div onClick={onClick4} class='ind-tag tag-tanktops'>Tank Tops</div><div onClick={onClick5} class='ind-tag tag-longsleeves'>Long Sleeves</div><div onClick={onClick6} class='ind-tag tag-polos'>Polos</div><div onClick={onClick7} class='ind-tag tag-mens'>Men's</div><div onClick={onClick8} class='ind-tag tag-womens'>Women's</div>
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
