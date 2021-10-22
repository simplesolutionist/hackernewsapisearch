import Search from './pages/search';
import History from './pages/history';
import Header from './components/Header';
import SearchContext from './store/SearchContext';
import { useMemo, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
function App() {
  const [searchHistory, setSearchHistory] = useState('');
  const providerSearch = useMemo(
    () => ({ searchHistory, setSearchHistory }),
    [searchHistory, setSearchHistory]
  );

  return (
    <div>
      <Header />
      <main>
        <Route path="/" exact>
          <Redirect to="/search" />
        </Route>
        <SearchContext.Provider value={providerSearch}>
          <Route path="/search" component={Search}>
            <Search />
          </Route>
          <Route path="/history" component={History}>
            <History />
          </Route>
        </SearchContext.Provider>
      </main>
    </div>
  );
}

export default App;
