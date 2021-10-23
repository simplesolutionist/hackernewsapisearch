import NewsFeed from './NewsFeed';
import styled from 'styled-components'

const HistoryResults = (props) => {
  const checkForDefault = () => {
    if (props.title === '') {
      return null;
    } else {
      return (
        <NewsFeed>
          <SearchTitle>
            <h2>{props.title}</h2>
          </SearchTitle>
        </NewsFeed>
      );
    }
  };
  return <ul>{checkForDefault()}</ul>;
};

export default HistoryResults;

const SearchTitle = styled.div`
color:black;
display: flex;
flex-direction: column;
gap: 1rem;
justify-content:center;
text-align:center;
flex-flow: column-reverse;
justify-content: flex-start;
flex: 1;
font-size:8px;
`
