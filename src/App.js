import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchFilms } from './redux/reducer';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Films from './components/films/Films';
import Film from './components/film/Film';
import AddFilm from './components/addFilm/AddFilm';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/films">
          <Films />
        </Route>
        <Route path="/films/:id">
          <Film />
        </Route>
        <Route path="/add-film">
          <AddFilm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
