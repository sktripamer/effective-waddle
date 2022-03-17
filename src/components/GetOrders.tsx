import * as React from "react";
import { useQuery, gql } from "@apollo/client";

import useAuth, { User } from "../hooks/useAuth";


const GET_ORDERS = gql`
query customer( $input: Integer) {
    customer( customerId:$input ) {
    orders {
      edges {
        node {
          id
        }
      }
    }
    }
}
`;

export default function GetOrders() {
  const { user } = useAuth();
  const { id } = user as User;
  const { loading, error, data } = useQuery(GET_ORDERS, {
    variables: { input: id },
  });

  if (loading) return <p>Loading ...</p>;
  if (!loading) {
    console.log(data)
  }
  return (
      
    <div>
  Hello {data}
  { console.log(data) }
    </div>
  );
}