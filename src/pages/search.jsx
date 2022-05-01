import * as React from "react";
import { graphql } from 'gatsby';
import SearchBar from '../components/search';

export default ({
  data: {
      products: { nodes },
  },
}) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s')
  const [searchQuery, setSearchQuery] = useState(query || '');

  const posts = nodes;

 return (
      <div>
          <h1>Blog</h1>
          <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />
          {posts.map(post => (
               <div>{post.name}</div>
          ))}
      </div>
  );
};


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
