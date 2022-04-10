import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
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
              image {
                sourceUrl
              }
            }
            subtotal
          }
        }
        transactionId
        databaseId
        status
        shipping {
          address1
          address2
          city
          country
          email
          firstName
          lastName
          postcode
          state
        }
        hasShippingAddress
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
  useEffect(() => {
    console.log(window.location.href.indexOf("orders"))
    if (window.location.href.indexOf("orders") === -1) {
      console.log('here')
      window.location.reload();
    }


  }, []);
  const { user } = useAuth();
  const { id } = user as User;
  let orderOutput: String;
  const { loading, error, data } = useQuery(GET_ORDERS, {
    variables: { input: parseInt(atob(id).split(':')[1]) },
  });

  if (loading) return <p>Loading ...</p>;

  let newA = []
for (let i=0; i < data.orders.edges.length; i++) {
 newA.push(data.orders.edges[i])
}


  return (<div>
  {newA && newA.map((el) => <h1>order # {el.node.databaseId}</h1>)}
  { console.log(data) }
</div>);
}
