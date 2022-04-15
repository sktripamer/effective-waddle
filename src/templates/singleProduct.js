import React from 'react';
import { useMutation, gql } from "@apollo/client";

const singleProduct = ({data}) => {


    return (
        <div>
            aa
          <div>{JSON.stringify(data)}</div>
        </div>
    );
}

export default singleProduct;

// export const productQuery = gql`
// query SingleProductQuery($id: String!) {
//     product(id: $id, idType: DATABASE_ID) {
//         description
//         name
//       }
// }
// `
