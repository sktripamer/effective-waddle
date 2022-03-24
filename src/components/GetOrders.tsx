import * as React from "react";
import { useQuery, gql } from "@apollo/client";

import useAuth, { User } from "../hooks/useAuth";


const GET_ORDERS = gql`
query theorders( $input: Int) {
  orders(where: {customerId:$input}) {
    edges {
      node {
        total
        date
        customerNote
        lineItems {
          nodes {
            product {
              name
            }
            subtotal
          }
        }
        transactionId
        databaseId
      }
    }
  }
}
`;



//ADD ORDER TO VIA REST API SERVERLESS FUNCTION WHEN THIS HAPPENS. USE CUSTOMERNOTE FOR STRIPE DATA
//USE REST API TO PASS PAYMENT METHOD INFOS.
//https://stripe.com/docs/api/payment_methods/retrieve
//https://stripe.com/docs/api/payment_methods/update
//USE REST API TO UPDATE PAYMENT INFOS.


export default function GetOrders() {
  const { user } = useAuth();
  const { id } = user as User;
  let orderOutput: String;
  const { loading, error, data } = useQuery(GET_ORDERS, {
    variables: { input: parseInt(atob(id).split(':')[1]) },
  });

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
  Total number of orders: aa
  { console.log(data) }
    </div>
  );
}
