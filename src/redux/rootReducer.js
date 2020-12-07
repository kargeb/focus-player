import { combineReducers } from 'redux';
import { editFilmReducer } from './editFilmReducer';
import { filmsReducer } from './filmsReducer';

const rootReducer = combineReducers({
  filmsReducer,
  editFilmReducer,
});

export default rootReducer;
