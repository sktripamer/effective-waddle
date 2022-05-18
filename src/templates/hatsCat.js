import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import DOMPurify from 'dompurify';
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ProductLister from "../components/ProductLister";
import HeroRender from "../components/HeroRender";
import ImageGallery from 'react-image-gallery';
import AuthContent from "../components/AuthContent";
import WriteReview from "../components/WriteReview";


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
        setActiveTag("T-shirts")
        restartAnimation()
    }
    const onClick3 = () => {
        setActiveTag("Hoodies")
        restartAnimation()
    }
    const onClick4 = () => {
        setActiveTag("Tank Tops")
        restartAnimation()
    }
    const onClick5 = () => {
        setActiveTag("Long Sleeves")
        restartAnimation()
    }
    const onClick6 = () => {
        setActiveTag("Polos")
        restartAnimation()
    }
    const onClick7 = () => {
        setActiveTag("Men's")
        restartAnimation()
    }
    const onClick8 = () => {
        setActiveTag("Women's")
        restartAnimation()
    }
    console.log(pagedata)

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
