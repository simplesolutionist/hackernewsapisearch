import { useState } from 'react';
import styled from 'styled-components'
import './SearchBar.css';

const SearchBar = (props) => {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState('');

  const inputHandler = (event) => {
    const text = event.target.value;

    setSearchText(text);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    onSearch(searchText);
    setSearchText('');
  };

  return (
    <div className="search-bar">
      <form onSubmit={submitHandler}>
        <div className="search-form__controls">
          <div className="search-form__control">
            <input
              type="text"
              value={searchText}
              onChange={inputHandler}
              placeholder="Search Hacker News "
            />
          </div>
        </div>
        <div className="search-submit">
        <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
const Button = styled.div`
  display:flex;
  font: inherit;
  cursor: pointer;
  padding: 7px 50px;
  background-color: black;
  color: white;
  border: 2.1px solid black;

`
const ButtonPosition = styled.div`
  display:flex;
  float:right;
`