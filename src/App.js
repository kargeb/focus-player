import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Films from './components/films/Films';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
          {/* <Route path="/film/:id">
            <FilmView />
          </Route> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
