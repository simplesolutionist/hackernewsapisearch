import NewsFeed from './NewsFeed';
import './Search.css';

const Search = (props) => {
  return (
    <ul>
      <NewsFeed className="search" >
        <div className="search__title">Title:
          <h2>{props.title}</h2><br></br>
          <div className="search__author">Author:{props.author}</div><br></br>
          <div className="search__url">URL:{props.url}</div><br></br><br></br>
          <div className="search__points">Points:{props.points}</div>
          <div className="search__created_at">Created At:{props.created_at}</div>
          <div className="search__comments">Comments{props.comments}</div>
        </div>
      </NewsFeed>
    </ul>
  );
};

export default Search;
