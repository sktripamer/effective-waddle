import React from 'react';
import SearchBar from '../components/search';
import { useState } from "react";

export default function SearchSystem({
    data: {
        products: { edges },
    },
}) {
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
            {posts.map(post =>
                // PostLink will be a component that renders a summary of your post
                // e.g. the title, date and an excerpt
                // <PostLink post={post} />
                <div>{post.node.databaseId}</div>
            )}
        </div>
    );
};
