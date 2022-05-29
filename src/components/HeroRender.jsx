import React from 'react';
import { useState, useEffect, useRef } from "react";
import ImageGallery from 'react-image-gallery';
import { useSpringCarousel } from 'react-spring-carousel-js'

export default function HeroRender(props) {

    const goToProduct = (e) => {
        console.log(e.target.dataset.idlink)
        navigate(e.target.dataset.idlink)
    }

 const featureFilter = props.herodata.data.products.edges.filter(edge => edge.node.featured === true);

  const [useItems, setUseItems] = useState([]);

    useEffect(() => {
        let items = [];
        let itemIndex = 1;
        props.herodata.data.products.edges.forEach( edge => {
            if (edge.node.featured === true) {
                let tempObj = {
                    "original": edge.node.featuredImage.node.sourceUrl,
                    "thumbnail": edge.node.featuredImage.node.sourceUrl,
                    "title": edge.node.name,
                    "link": 'shirts/' + edge.node.slug,
                    "price": edge.node.price,
                    "id": `item-${itemIndex}`
                }
                items.push(tempObj)
                itemIndex++;
            }
        })
        setUseItems(items)

    }, []);
    console.log(useItems)

    const { 
        carouselFragment, 
        slideToPrevItem, 
        slideToNextItem 
      } = useSpringCarousel({
        withLoop: true,
        items: featureFilter.forEach( i, index => 
            
            
            ({

            id: `item-${index}`,
            renderItem: (
              <div onClick={goToProduct} idindex={i.link} className='heroproduct-render'>
                <div className='heroproduct-img-cont'><img src={edge.node.featuredImage.node.sourceUrl}/></div>
                <div className='heroproduct-title'>{edge.node.name}</div>
                <div className='heroproduct-price'>{edge.node.price}</div>
              </div>
            ),
            
          })
          ),
      });
return (
    <>
        <div>
        <button className='heroprev' onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button className='heronext' onClick={slideToNextItem}>Next item</button>
      </div>
    </>
)


}
