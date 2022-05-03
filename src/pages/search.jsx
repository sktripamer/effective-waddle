import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useFlexSearch } from 'react-use-flexsearch';
import SearchBar from '../components/search';
export default ({
    data: {
        localSearchPages: { index, store }
    },
}) => {
  let search;
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) search = window.location;

    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const posts = results;
    const results = useFlexSearch(searchQuery, index, store);

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
    localSearchPages {
      index
      store
    }
  }
`
