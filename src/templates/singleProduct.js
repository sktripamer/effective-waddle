import React from 'react';
import { useQuery, gql } from "@apollo/client";

const singleProduct = ( props ) => {

    const { pageContext: { id, slug } } = props;

    const query = gql`
    query SingleProductQuery($id: String!) {
        product(id: $id, idType: DATABASE_ID) {
            description
            name
          }
    }
    `
    
      const { loading, error, data } = useQuery(query, {
        variables: { input: id },
      });
    
      if (loading) return <p>Loading ...</p>;


console.log(props.pageContext)
    return (
        <div>
            aa
          <div>{data.product.name}</div>
          <div>{data.product.description}</div>
        </div>
    );
}

export default singleProduct;

