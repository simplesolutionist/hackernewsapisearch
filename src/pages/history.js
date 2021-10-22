import HistoryList from '../components/HistoryList';
import SearchContext from '../store/SearchContext';
import { useContext } from 'react';

const History = () => {
  const searchResults = useContext(SearchContext).searchHistory;

  let data = [];

  if (searchResults) {
    data = searchResults || [];
  }

  return (
    <div className="result">
      Search History
      {data.map((item) => (
        <HistoryList key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default History;