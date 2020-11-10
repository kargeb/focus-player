const TEST = 'TEST';
const ADD_FILM_REQUESTED = 'ADD_FILM_REQUESTED';
const ADD_FILM_SUCCEEDED = 'ADD_FILM_SUCCEEDED';
const ADD_FILM_FAILED = 'ADD_FILM_FAILED';

const FETCH_FILMS_REQUESTED = 'FETCH_FILMS_REQUESTED';
const FETCH_FILMS_SUCCEEDED = 'FETCH_FILMS_SUCCEEDED';
const FETCH_FILMS_FAILED = 'FETCH_FILMS_FAILED';

export const addFilmRequested = (newFilm) => ({ type: ADD_FILM_REQUESTED, payload: newFilm });
export const addFilSucceeded = (addedFilm) => ({ type: ADD_FILM_SUCCEEDED, payload: addedFilm });
export const addFilmFailed = () => ({ type: ADD_FILM_FAILED });

export const fetchRequested = () => ({ type: FETCH_FILMS_REQUESTED });
export const fetchFailed = () => ({ type: FETCH_FILMS_FAILED });
export const fetchSucceeded = (films) => ({ type: FETCH_FILMS_SUCCEEDED, payload: films });
export const test = () => ({ type: TEST });

// export const addFilm = ({ newFilm }) => ({ type: ADD_FILM, payload: newFilm });
export const addFilm = (newFilm) => {
  return (dispatch) => {
    dispatch(addFilmRequested());
    console.log('ADD FILM first DISPATCH');
    fetch('https://agile-depths-96654.herokuapp.com/v1/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFilm),
    })
      .then((response) => response.json())
      .then((data) => dispatch(addFilSucceeded(data)))
      .catch(() => dispatch(addFilmFailed()));
  };
};

export const fetchFilms = () => {
  return (dispatch) => {
    dispatch(fetchRequested());
    fetch('https://agile-depths-96654.herokuapp.com/v1/movies')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSucceeded(data));
      })
      .catch(() => dispatch(fetchFailed()));
  };
};

const INITIAL_STATE = {
  films: [],
  testValue: 23,
  isLoading: false,
  isError: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testValue: state.testValue + 5,
      };
    case FETCH_FILMS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_FILMS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case FETCH_FILMS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        films: [...action.payload],
      };
    case ADD_FILM_REQUESTED:
      console.log('jestem w ADD FILM R E QU E STED');
      return {
        ...state,
      };
    case ADD_FILM_SUCCEEDED:
      console.log('jestem w ADD SUCCCCCEEEDEDDDDD');
      console.log('payload z cussessedd: ', action.payload);
      return {
        ...state,
        films: [...state.films, { ...action.payload }],
      };
    case ADD_FILM_FAILED:
      console.log('jestem w ADD FILM FAAAAAAILED');
      return {
        ...state,
      };
    default:
      return state;
  }
};
