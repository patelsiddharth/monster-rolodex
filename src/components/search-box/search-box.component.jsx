import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({onSearchEvent, placeholder}) => (
    <input 
        className='search'
        type="search" 
        placeholder={placeholder}
        onChange = {e => onSearchEvent(e)}
    />
)