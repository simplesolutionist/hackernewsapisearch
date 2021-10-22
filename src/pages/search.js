import API from '../api/API';
import { useContext, useState } from 'react';
import SearchContext from '../store/SearchContext';
import SearchList from '../components/SearchList';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const { setSearchHistory } = useContext(SearchContext);

  const [search, setSearch] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await API.get(text);

    setSearchHistory((prevHistory) => {
      return [{ title: text, id: Math.random().toString() }, ...prevHistory];
    });

    setSearch((prevState) => {
      return { ...prevState, results: results.data.hits };
    });
  };

  return (
    <div>
      <div>
        <SearchBar onSearch={onSearch} />
        <SearchList results={search.results} />
      </div>
    </div>
  );
};

export default Search;
