const TOGGLE_EDIT_FILM_MODE = 'TOGGLE_EDIT_FILM_MODE';

export const toggleEditFilmMode = () => ({ type: TOGGLE_EDIT_FILM_MODE });

const INITIAL_STATE = {
  isEditMode: false,
  isDeleteModalOpen: false,
};

export const editFilmReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_FILM_MODE:
      console.log('stan z EDITFILM reducera: ', state);
      return {
        ...state,
        isEditMode: !state.isEditMode,
      };
    default:
      return state;
  }
};
