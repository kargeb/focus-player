// const API_URL = 'https://agile-depths-96654.herokuapp.com';

const API_URL = 'http://localhost:3333';

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

const SELECT_CURRENT_FILM = 'SELECT_CURRENT_FILM';

// const HANDLE_WATCHED_FILM_CHECKBOX = 'HANDLE_WATCHED_FILM_CHECKBOX';
const CLOSE_ADDED_FILM_MODAL = 'CLOSE_ADDED_FILM_MODAL';

export const closeAddedFilmModal = () => ({ type: CLOSE_ADDED_FILM_MODAL });

// export const handleWatchedFilmCheckbox = (isWatched) => ({
//   type: HANDLE_WATCHED_FILM_CHECKBOX,
//   payload: isWatched,
// });

export const selectCurrentFilm = (id) => ({
  type: SELECT_CURRENT_FILM,
  payload: id,
});

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
    const editedEndpoint = `${API_URL}/v1/movies/${editedFilm.id}`;
    const editedFilmWithoutId = {
      title: editedFilm.title,
      description: editedFilm.description,
      video_url: editedFilm.video_url,
      watched: editedFilm.watched,
    };

    fetch(editedEndpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedFilmWithoutId),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch(editFilSucceeded(data)))
      .catch((err) => {
        return dispatch(editFilmFailed(err));
      });
  };
};

export const deleteFilm = (selectedFilm) => {
  return (dispatch) => {
    dispatch(deleteFilmRequested());
    fetch(`${API_URL}/v1/movies/${selectedFilm}`, {
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
    fetch(`${API_URL}/v1/movies`, {
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
    fetch(`${API_URL}/v1/movies`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSucceeded(data));
      })
      .catch(() => dispatch(fetchFailed()));
  };
};

// export const toggleFilmWatched = () => {
//   return (dispatch) => {
//     dispatch(fetchRequested());
//     fetch(`${API_URL}/v1/movies`)
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(fetchSucceeded(data));
//       })
//       .catch(() => dispatch(fetchFailed()));
//   };
// };

const INITIAL_STATE = {
  films: [],
  testValue: 23,
  isLoading: true,
  isError: false,
  addFilmLoading: false,
  currentFilm: null,
  isEdited: false,
  isAddedFilmModalVisible: false,
};

export const filmsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_FILMS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_FILMS_FAILED:
      console.log('FETCH_FILMS_FAILED');
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
        currentFilm: { ...action.payload },
        films: [...state.films, { ...action.payload }],
        addFilmLoading: false,
        isAddedFilmModalVisible: true,
      };
    case ADD_FILM_FAILED:
      console.log('ADD_FILM_FAILED');
      return {
        ...state,
        addFilmLoading: false,
      };
    case EDIT_FILM_REQUESTED:
      return {
        ...state,
        isEdited: true,
      };
    case EDIT_FILM_SUCCEEDED: {
      const filmsWithoutEditedOne = state.films.filter((film) => film.id !== action.payload.id);
      return {
        ...state,
        currentFilm: { ...action.payload },
        films: [...filmsWithoutEditedOne, { ...action.payload }],
        isEdited: false,
      };
    }
    case EDIT_FILM_FAILED:
      console.log('EDITED FILM FAILED');
      return {
        ...state,
      };
    case DELETE_FILM_REQUESTED:
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
    case SELECT_CURRENT_FILM: {
      const currentFilm = state.films.find((item) => item.id === action.payload);
      return {
        ...state,
        currentFilm,
      };
    }
    // case HANDLE_WATCHED_FILM_CHECKBOX: {
    //   const isWatched = action.payload;
    //   return {
    //     ...state,
    //   };
    // }
    case CLOSE_ADDED_FILM_MODAL: {
      return {
        ...state,
        isAddedFilmModalVisible: false,
      };
    }
    default:
      return state;
  }
};
