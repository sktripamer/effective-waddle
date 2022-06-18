import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
return (
    <form onSubmit={handleSubmit} className='search-former'
        
        autoComplete="off"
    >
        <label htmlFor="header-search">
            <span className="visually-hidden">
                Search products
            </span>
        </label>
        <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search our store..."
            name="s"
        />
    </form>
)
};
