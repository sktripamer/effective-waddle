import React from 'react';
import { useState, useEffect, useRef } from "react";
import ImageGallery from 'react-image-gallery';

export default function HeroRender(props) {

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

  const [useItems, setUseItems] = useState([]);

    useEffect(() => {
        let items = [];
        props.herodata.data.products.edges.forEach( edge => {
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
        setUseItems(items)

    }, []);
    console.log(useItems)
return (
    <>
    {console.log(useItems)}
    <ImageGallery showThumbnails={false} showFullscreenButton={false} showPlayButton={false} items={useItems}/>
    </>
)


}
