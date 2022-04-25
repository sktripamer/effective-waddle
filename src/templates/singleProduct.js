import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
const singleProduct = ( props ) => {
    const [varSelect, varSelector] = useState();
    const [clickedItem, setClickedItem] = useState(0);
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
                  }
                }
                attributes {
                  nodes {
                    name
                    options
                  }
                }
                price
              }
          }
    }
    `
}
const VariationCart = (e) => {
    if (varSelect===undefined) {
        console.log(data.product.variations.nodes[0].databaseId)
    } else {
        console.log(varSelect)
    } 
   
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
      <button onClick={VariationCart}>add to cart</button>
    </div>
        
        }
    
    </div>
    </Layout>
    );
}

export default singleProduct;

