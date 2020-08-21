import React from 'react';
import SearchForm from './index';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

describe('Testing SearchForm component', () => {
  it('input with placeholder should be rendered using data from props', () => {
    render(
      <SearchForm
        sort={jest.fn()}
        setSearchText={jest.fn()}
        searchText="Wonderful"
      />
    );
    const placeholder = screen.getByPlaceholderText('Search...');
    expect(placeholder).toBeInTheDocument();
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('Wonderful');
  });
  it('call the callback every time input value is changed', () => {
    const setSearchText = jest.fn();
    render(
      <SearchForm
        sort={jest.fn()}
        setSearchText={setSearchText}
        searchText="Wonderful"
      />
    );
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('Wonderful');
    UserEvent.type(input, 'Awesome');
    expect(setSearchText).toHaveBeenCalledTimes('Awesome'.length);
  });
  it('button to sort should be rendered correctly', () => {
    render(
      <SearchForm sort={jest.fn()} setSearchText={jest.fn()} searchText="Ok" />
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('call the sort function after clicking the button', () => {
    const sort = jest.fn();
    render(
      <SearchForm sort={sort} setSearchText={jest.fn()} searchText="" />
    );
    const button = screen.getByRole('button');
    UserEvent.click(button);
    expect(sort).toHaveBeenCalledTimes(1);
  });
});
