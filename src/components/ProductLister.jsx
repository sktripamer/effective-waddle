import React from 'react';
import StarRating from '../components/StarRating';
import {navigate} from 'gatsby';
export default function ProductLister(props) {
    let renderItems = []
    props.allData.data.products.edges.forEach( edge => {
        if (props.filter === 'all') {
            renderItems.push(edge)
        }  else {
            edge.node.productTags.edges.forEach( tags => {
                if (tags.node.name === props.filter) {
                     renderItems.push(edge)
                 }
             })
        }

    
    })
    const changePage = (e) => {
        console.log(e.target.dataset.idlink)
        navigate(e.target.dataset.idlink)
    }
return (
    <>
    {renderItems.map(item =>
              <div onClick={changePage} data-idlink={item.node.slug} class={`mini-product-cont ${Math.random().toString(36).slice(2, 7)}`}>
        <img src={item.node.featuredImage.node.sourceUrl}/>
        <div class='mini-title'>{item.node.name}</div>
        <div class='mini-review'>{<StarRating total={item.node.averageRating}/>}</div>
        <div class='mini-price'>{item.node.price}</div>
    </div>
   )}    
    
    </>

)


}
