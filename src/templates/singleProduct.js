import React from 'react';
import { useQuery, gql } from "@apollo/client";

const singleProduct = ( props ) => {

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

    
    
      const { loading, error, data } = useQuery(query, {
        variables: { id: id },
      });
    
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
    </div>
        
        }
    
    </div>
    );
}

export default singleProduct;

