import React from 'react';
import StarRating from '../components/StarRating';
export default function ProductLister(props) {
    let renderItems = []
    props.allData.data.products.edges.forEach( edge => {
        edge.node.productTags.edges.forEach( tags => {
            if (props.filter === 'all') {
                renderItems.push(edge)
            } else if (tags.node.name === props.filter) {
                renderItems.push(edge)
            }
        })
    
    })


return (
    <>
    {renderItems.map(item => <div class='mini-product-cont'>
        <img src={item.node.featuredImage.node.sourceUrl}/>
        <div class='mini-title'>{item.node.name}</div>
        <div class='mini-review'>{<StarRating total={item.node.averageRating}/>}</div>
        <div class='mini-price'>{item.node.price}</div>
    </div>)}    
    
    </>

)


}
