const ADD_FILM_REQUESTED = 'ADD_FILM_REQUESTED';
const ADD_FILM_SUCCEEDED = 'ADD_FILM_SUCCEEDED';
const ADD_FILM_FAILED = 'ADD_FILM_FAILED';

const FETCH_FILMS_REQUESTED = 'FETCH_FILMS_REQUESTED';
const FETCH_FILMS_SUCCEEDED = 'FETCH_FILMS_SUCCEEDED';
const FETCH_FILMS_FAILED = 'FETCH_FILMS_FAILED';

const DELETE_FILM_REQUESTED = 'DELETE_FILM_REQUESTED';
const DELETE_FILM_SUCCEEDED = 'DELETE_FILM_SUCCEEDED';
const DELETE_FILM_FAILED = 'DELETE_FILM_FAILED';

const EDIT_FILM_REQUESTED = 'EDIT_FILM_REQUESTED';
const EDIT_FILM_SUCCEEDED = 'EDIT_FILM_SUCCEEDED';
const EDIT_FILM_FAILED = 'EDIT_FILM_FAILED';

export const editFilmRequested = (editedFilm) => ({
  type: EDIT_FILM_REQUESTED,
  payload: editedFilm,
});
export const editFilSucceeded = (editedFilm) => ({
  type: EDIT_FILM_SUCCEEDED,
  payload: editedFilm,
});
export const editFilmFailed = () => ({ type: EDIT_FILM_FAILED });

export const addFilmRequested = (newFilm) => ({ type: ADD_FILM_REQUESTED, payload: newFilm });
export const addFilSucceeded = (addedFilm) => ({ type: ADD_FILM_SUCCEEDED, payload: addedFilm });
export const addFilmFailed = () => ({ type: ADD_FILM_FAILED });

export const fetchRequested = () => ({ type: FETCH_FILMS_REQUESTED });
export const fetchFailed = () => ({ type: FETCH_FILMS_FAILED });
export const fetchSucceeded = (films) => ({ type: FETCH_FILMS_SUCCEEDED, payload: films });

export const deleteFilmRequested = (newFilm) => ({ type: DELETE_FILM_REQUESTED, payload: newFilm });
export const deleteFilmSucceeded = (deletedFilm) => ({
  type: DELETE_FILM_SUCCEEDED,
  payload: deletedFilm,
});
export const deleteFilmFailed = (err) => ({ type: DELETE_FILM_FAILED, payload: err });

export const editFilm = (editedFilm) => {
  return (dispatch) => {
    dispatch(editFilmRequested(editedFilm));
    const editEndpoint = `https://agile-depths-96654.herokuapp.com/v1/movies/${editedFilm.id}`;
    const editedFilmWithoutId = {
      title: editedFilm.title,
      description: editedFilm.description,
      video_url: editedFilm.video_url,
    };

    fetch(editEndpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedFilmWithoutId),
    })
      .then((response) => {
        console.log('response: ', response);
        return response.json();
      })
      .then((data) => dispatch(editFilSucceeded(data)))
      .catch((err) => {
        console.log('JESTEM W CACZU EDITOWYM!!!!');
        return dispatch(editFilmFailed(err));
      });
  };
};

export const deleteFilm = (selectedFilm) => {
  return (dispatch) => {
    dispatch(deleteFilmRequested());
    fetch(`https://agile-depths-96654.herokuapp.com/v1/movies/${selectedFilm}`, {
      method: 'DELETE',
    })
      .then((response) => response)
      .then(() => dispatch(deleteFilmSucceeded(selectedFilm)))
      .catch((err) => dispatch(deleteFilmFailed(err)));
  };
};

export const addFilm = (newFilm) => {
  return (dispatch) => {
    dispatch(addFilmRequested());
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
  isLoading: true,
  isError: false,
  addFilmLoading: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
      return {
        ...state,
        addFilmLoading: true,
      };
    case ADD_FILM_SUCCEEDED:
      return {
        ...state,
        films: [...state.films, { ...action.payload }],
        addFilmLoading: false,
      };
    case ADD_FILM_FAILED:
      console.log('ADD FILM FAILED!!!');
      return {
        ...state,
        addFilmLoading: false,
      };
    case EDIT_FILM_REQUESTED:
      console.log('EDIT REQUEST POSZLO!!!', action.payload);
      return {
        ...state,
      };
    case EDIT_FILM_SUCCEEDED: {
      const filmsWithoutEditedOne = state.films.filter((film) => film.id !== action.payload.id);
      return {
        ...state,
        films: [...filmsWithoutEditedOne, { ...action.payload }],
      };
    }
    case EDIT_FILM_FAILED:
      console.log('EDITTTTT FILM FAILED!!!');
      return {
        ...state,
      };
    case DELETE_FILM_REQUESTED:
      console.log('DELETE FILM FAILED!!!', action.payload);
      return {
        ...state,
      };
    case DELETE_FILM_SUCCEEDED: {
      const filmsWithoutDeletedOne = state.films.filter((film) => film.id !== action.payload);
      return {
        ...state,
        films: [...filmsWithoutDeletedOne],
      };
    }
    default:
      return state;
  }
};
