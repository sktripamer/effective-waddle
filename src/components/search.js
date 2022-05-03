import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
    const handleSubmit = () => {
        e.preventDefault();
    }
return (
    <form onSubmit={handleSubmit} className='search-former'
        action="/"
        method="get"
        autoComplete="off"
    >
        <label htmlFor="header-search">
            <span className="visually-hidden">
                Search blog posts
            </span>
        </label>
        <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search for products"
            name="s"
        />
    </form>
)
};
