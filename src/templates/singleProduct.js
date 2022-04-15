import React from 'react';
import { useMutation, gql } from "@apollo/client";

const singleProduct = ( props ) => {

    const { pageContext: { id, slug } } = props;

console.log(props.pageContext)
    return (
        <div>
            aa
          <div>{id}</div>
          <div>{slug}</div>
        </div>
    );
}

export default singleProduct;

export const query = gql`
query SingleProductQuery($id: String!) {
    product(id: $id, idType: DATABASE_ID) {
        description
        name
      }
}
`
