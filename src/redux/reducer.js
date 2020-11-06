const TEST = 'TEST';
const FETCH_FILMS_REQUESTED = 'FETCH_FILMS_REQUESTED';
const FETCH_FILMS_SUCCEEDED = 'FETCH_FILMS_SUCCEEDED';
const FETCH_FILMS_FAILED = 'FETCH_FILMS_FAILED';

export const fetchRequested = () => ({ type: FETCH_FILMS_REQUESTED });
export const fetchFailed = () => ({ type: FETCH_FILMS_FAILED });
export const fetchSucceeded = () => ({ type: FETCH_FILMS_SUCCEEDED, payload: films });
export const test = () => ({ type: TEST });

const INITIAL_STATE = {
  films: [],
  testValue: 23,
  isLoading: false,
  isError: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  console.log('in REDUCER');
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
    default:
      return state;
  }
};
