import React from 'react'

const Search = ({searchTerm, handleSearchTermChange}) => (
    <>
    <label htmlFor='search'>Search:</label>
    <input 
    type='text'
    value={searchTerm}
    id='search'
    name='search' 
    onChange={handleSearchTermChange}/>
    </>
)

export default Search
