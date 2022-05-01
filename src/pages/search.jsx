import * as React from "react";
import SearchSystem from '../components/SearchSystem';

export default function SearchPage() {
  return (
    <SearchSystem data={pageQuery}/>
  );
}

export const pageQuery = graphql`
query {
    products {
      nodes {
        slug
        name
        productCategories {
          nodes {
            slug
          }
        }
      }
    }
  }
  
`
