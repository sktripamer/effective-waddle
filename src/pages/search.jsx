import * as React from "react";
import { graphql } from 'gatsby';
import SearchBar from '../components/search';
import SearchSystem from '../components/SearchSystem';
import { useQuery, gql } from "@apollo/client";
export default function searchPage() {

  const GET_ORDERS = gql`
  query {
    products {
      edges {
        node {
          databaseId
        }
      }
    }
    }
    
  
  `;
  const { loading, error, data } = useQuery(GET_ORDERS);
  if (loading) return <p>Loading ...</p>;
 return (

  
      <div>
<SearchSystem data={data}/>
      </div>
  );
};

