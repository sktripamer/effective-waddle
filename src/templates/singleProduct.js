import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
const singleProduct = ( props ) => {
    const [varSelect, varSelector] = useState();
    const [clickedItem, setClickedItem] = useState(0);
    const [count, setCount] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false)
    const { pageContext: { id, slug, name, description, cat, type } } = props;
let query;

if (type === "SIMPLE") {
    query = gql`
    query SingleProductQuery($id: ID!) {
        product(id: $id, idType: DATABASE_ID) {
            ... on SimpleProduct {
                price
              }
          }
    }
    `
} else {
    query = gql`
    query SingleProductQuery($id: ID!) {
        product(id: $id, idType: DATABASE_ID) {
            ... on VariableProduct {
                variations {
                  nodes {
                    databaseId
                    attributes {
                      nodes {
                        value
                      }
                    }
                    name
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
                attributes {
                  nodes {
                    name
                    options
                  }
                }
                price
                name
                galleryImages {
                  nodes {
                    sourceUrl
                  }
                }
              }
          }
    }
    `
}
const VariationCart = (e) => {
   let dbID;
    let varName;
    let varImage;
    let varPrice;
       dbID =  data.product.variations.nodes[clickedItem].databaseId
       varName =  data.product.variations.nodes[clickedItem].name
       varImage =  data.product.variations.nodes[clickedItem].featuredImage.node.sourceUrl
       varPrice = Number(data.product.price.replace(/[^0-9.-]+/g,""));

   let tempCart = function() {
    try {
    return JSON.parse(localStorage.cart)
    } catch {return []}      
}

  let cartObj = {
    ID: dbID,
    name: varName,
    url: varImage,
    quantity: count,
    price: varPrice,
    total: count * varPrice
   }
   console.log(cartObj)
   let cartModifier = tempCart();
   let cartItemFound = false;


   //search through the localstorage cart array to find if this item youre adding already exists in it. if it does, modify it's quantity.
   tempCart().forEach((cartitem, index) => {
    if (cartitem.ID = cartObj.ID) {
       
        cartModifier[index].quantity = cartObj.quantity
        cartModifier[index].total = cartObj.total
        cartItemFound = true;

    }
 
   });


   //if no duplicate cart item is found to already exist in localstorage cart array, simply add it to the array.
   if (cartItemFound === false) {
       cartModifier.push(cartObj)
   }

   localStorage.setItem('cart', JSON.stringify(cartModifier))

}



const variationClick = (e) => {
    console.log(e.target.dataset.id)
    //find variation and set it
    setClickedItem(parseInt(e.target.dataset.idindex));
    varSelector(data.product.variations.nodes[e.target.dataset.idindex].databaseId)
  }

      const { loading, error, data } = useQuery(query, {
        variables: { id: id },
      });

      if (loading) return <p>Loading ...</p>;
    

console.log(props.pageContext)

let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
      if (count >= 2) {
        setCount(count - 1);
      }

  };

  const changeCount = (e) => {
      setCount(parseInt(e.target.value.replace(/\D/,'')))
  }

    return (
        <Layout htmlClassName={"scroll"}>
        <Navbar />
        <div>
        {type === "SIMPLE"
        ? (
            
          
            <div>
            aa
          <div>{data.product.name}</div>
          <div>{data.product.description}</div>
        </div>
        
          )
        : 
        <div>
       yy
      <div>{data.product.name}</div>
      <div>{data.product.attributes.nodes[0].name}</div>
      {data.product.attributes.nodes[0].options && data.product.attributes.nodes[0].options.map((el, index) =><div className={index === clickedItem ? "is-checked" : ""} onClick={variationClick} data-idindex={index} data-id={el}>{el}</div>)}
      <div>
        <div class="count">
      
     <input type="tel" value={count} onChange={changeCount}/>
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <button onClick={decrementCount}>-</button>
          <button onClick={incrementCount}>+</button>
        </div>
      </div>
      
      <button onClick={VariationCart}>add to cart</button>
    </div>
        
        }
    
    </div>
    </Layout>
    );
}

export default singleProduct;

