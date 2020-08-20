import React, { useState } from 'react';
import { AiOutlineSortAscending } from 'react-icons/ai';
import PropTypes from 'prop-types';

function SearchForm({ sort, search }) {
  const [searchText, setSearchText] = useState('');

  const onInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    search(value);
  };
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={onInputChange}
      />
      <button className="search-form__button--sort" onClick={sort}>
        <AiOutlineSortAscending />
      </button>
    </div>
  );
}

SearchForm.propTypes = {
  sort: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default SearchForm;
