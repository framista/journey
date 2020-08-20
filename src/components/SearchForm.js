import React, { useState } from 'react';
import { AiOutlineSortAscending } from 'react-icons/ai';
import PropTypes from 'prop-types';

function SearchForm({ sort }) {
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
      <button className="search-form__button--sort" onClick={sort}>
        <AiOutlineSortAscending />
      </button>
    </div>
  );
}

SearchForm.propTypes = {
  sort: PropTypes.func.isRequired,
};

export default SearchForm;
