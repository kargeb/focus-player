const TOGGLE_EDIT_FILM_MODE = 'TOGGLE_EDIT_FILM_MODE';
const TOGGLE_DELETE_FILM_MODAL = 'TOGGLE_DELETE_FILM_MODAL';

export const toggleEditFilmMode = () => ({ type: TOGGLE_EDIT_FILM_MODE });
export const toggleDeleteFilmModal = () => ({ type: TOGGLE_DELETE_FILM_MODAL });

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
    case TOGGLE_DELETE_FILM_MODAL:
      console.log('stan z EDITFILM reducera: ', state);
      return {
        ...state,
        isDeleteModalOpen: !state.isDeleteModalOpen,
      };
    default:
      return state;
  }
};
