import * as React from "react";
import SearchSystem from '../components/SearchSystem';
import { graphql } from 'gatsby';
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
