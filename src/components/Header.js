import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar'
import styled from 'styled-components'
const Header = () => {
  
  return (
    <Container>
      <Headers>
        <Search>
          <SearchList>
            <NavLink to="/search">
            Hacker News API
            </NavLink>
          </SearchList>
          <SearchList>
            <NavLink to="/search">
            Search
            </NavLink>
          </SearchList>
          <SearchList>
            <NavLink to="/history">
              History
            </NavLink>
          </SearchList>
        </Search>
      </Headers>
    </Container>
  );
};

export default Header;

const Container = styled.div`
height: 120px;
margin: 0px 70px;
background-color: #FF6600;
`
const Headers = styled.div`
height: 100%;

`
const Search = styled.div`
height: 100%;
display: flex;
margin: 0;
align-items: center;
justify-content: center;
`
const SearchList = styled.div`
justify-content: space-between;
margin:100px;
align-items: center;
a{
color:black;
}
`