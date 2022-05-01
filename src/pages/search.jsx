import * as React from "react";
import { graphql } from 'gatsby';
import SearchBar from '../components/search';

export default ({
  data: {
      products: { edges },
  },
}) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s')
  const [searchQuery, setSearchQuery] = useState(query || '');

  const posts = edges;

 return (
      <div>
          <h1>Blog</h1>
          <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
          />
          {posts.map(post => (
               <div>{post.node.databaseId}</div>
          ))}
      </div>
  );
};


export const pageQuery = graphql`
query {
  products {
    edges {
      node {
        databaseId
      }
    }
  }
  }
  
`
