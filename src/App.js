import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import SimpleBottomNavigation from './components/MainNav';
import Movies from "./components/Pages/Movies/Movies";
import Series from './components/Pages/Series/Series.js'
import Trending from './components/Pages/Trendings/Trending.js';
import Search from "./components/Pages/Search/Search";
import './App.css';
import { Container } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='app'>
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
