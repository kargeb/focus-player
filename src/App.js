import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Dashboard from './components/dashboard/Dashboard';
import Film from './components/film/Film';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/film">
            <Film />
          </Route>
          <Route path="/film/:id">
            <Film />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
