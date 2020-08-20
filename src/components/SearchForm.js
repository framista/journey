import React, { useState } from 'react';
import { AiOutlineSortAscending } from 'react-icons/ai';

function SearchForm() {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-form__button--sort">
        <AiOutlineSortAscending />
      </button>
    </div>
  );
}

export default SearchForm;
