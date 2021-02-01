import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchFilms } from './redux/filmsReducer';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Films from './components/films/Films';
import Film from './components/films/film/Film';
import AddFilm from './components/addFilm/AddFilm';
import Playlists from './components/playlists/Playlists';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Redirect exact from="/" to="/films" />
        {/* <Route exact path="/">
          <Films />
        </Route> */}
        <Route exact path="/films">
          <Films />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route path="/add-film">
          <AddFilm />
        </Route>
        <Redirect to="/films" />
        {/* <Route path="/playlists">
          <Playlists />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
