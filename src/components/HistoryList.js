import NewsFeed from './NewsFeed';
import './Search.css';

const HistoryList = (props) => {
  const checkForDefault = () => {
    if (props.title === '') {
      return null;
    } else {
      return (
        <NewsFeed className="search">
          <div className="search__title">
            <h2>{props.title}</h2>
          </div>
        </NewsFeed>
      );
    }
  };
  return <ul>{checkForDefault()}</ul>;
};

export default HistoryList;
