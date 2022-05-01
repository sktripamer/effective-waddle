import React from 'react';
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
            {posts.map(post =>
                // PostLink will be a component that renders a summary of your post
                // e.g. the title, date and an excerpt
                // <PostLink post={post} />
                <div>{post.name}</div>
            )}
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
