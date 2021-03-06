import Search from './Search';

const SearchResults = ({ results }) => {
  let data = [];

  if (results) {
    data = results || [];
  }

  return (
    <div className="result">
      {data.map((item) => (
        <Search
          key={item.objectID}title={item.title}
          author={item.author}
          url={item.url}
          points={item.points}
          comments={item.comments}
          created_at={item.created_at}
        />
      ))}
    </div>
  );
};

export default SearchResults;
