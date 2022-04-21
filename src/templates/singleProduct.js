import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { useState , useEffect } from "react";
const singleProduct = ( props ) => {
    const [varSelect, varSelector] = useState();
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
    console.log(varSelect)
}
const variationClick = (e) => {
    console.log(e.target.dataset.id)
    //find variation and set it
    data.product.variations.nodes.forEach(variation => {
        if (variation.name.includes(e.target.dataset.id)) {
            varSelector(variation.databaseId)
            console.log(variation.databaseId)
        }
    })
  }
    
      const { loading, error, data } = useQuery(query, {
        variables: { id: id },
      });
      useEffect(() => {
       if (!loading) varSelector(data.product.variations.nodes[0].databaseId)
      }, []);
      if (loading) return <p>Loading ...</p>;
    

console.log(props.pageContext)
    return (
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
      {data.product.attributes.nodes[0].options && data.product.attributes.nodes[0].options.map((el) =><div onClick={variationClick} data-id={el}>{el}</div>)}
      <button onClick={VariationCart}>add to cart</button>
    </div>
        
        }
    
    </div>
    );
}

export default singleProduct;

