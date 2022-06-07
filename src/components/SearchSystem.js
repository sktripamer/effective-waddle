import React from 'react';
import SearchBar from '../components/search';
import { StaticQuery, graphql } from "gatsby"
import { useState } from "react";
import { useFlexSearch } from 'react-use-flexsearch';


const Header = ({
    data: {
        localSearchPages: { index, store }
    },
}) => {

    console.log(index)
    let search;
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) search = window.location;
  
      const query = new URLSearchParams(search).get('s');
      const [searchQuery, setSearchQuery] = useState(query || '');
    
      
      const results = useFlexSearch(searchQuery, index, store);
      const posts = results;
      const noSearch = (searchQuery !== '' && !(posts.length > 0));
      return (
          <div className='search-section'>
              <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
              />

            {noSearch === true ?

            (
                <div className='search-section-results'>
                    <p>No results! Try a different search.</p>
                </div>
            ) :

            (
                <div className='search-section-results'>
                {posts.map(post => (
                <>
                   <div>{post.name}</div>
                   <div>{post.slug}</div>
                   </>
              ))}
               </div>
            )
            
            
            }

              {posts.map(post => (
                <>
                   <div>{post.name}</div>
                   <div>{post.slug}</div>
                   </>
              ))}
          </div>
      );

}
  export default function SearchSystem() {
    return (
      <StaticQuery
        query={graphql`
        query {
            localSearchPages {
              index
              store
            }
          }
        `}
        render={data => <Header data={data}/>}
      />
    )
  }
