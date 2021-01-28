import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteFilm } from '../../../../../redux/filmsReducer';
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

const DeleteFilmModal = ({ setDeleteModalVisibility }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const handleDelete = () => {
    dispatch(deleteFilm(id));
    history.push('/films');
    setDeleteModalVisibility(false);
  };

  return (
    <div className="modal  is-active">
      <div className="modal-background" onClick={() => setDeleteModalVisibility(false)} />
      <div className="modal-content">
        <div className="box has-background-dark py-6">
          <h4 className="title is-5 has-text-centered mb-6">Delete this film?</h4>
          <div className="buttons is-centered">
            <button
              type="button"
              className="button is-light is-outlined mr-4"
              onClick={() => setDeleteModalVisibility(false)}
            >
              No
            </button>
            <button
              type="button"
              className="button is-primary is-outlined ml-4"
              onClick={() => handleDelete()}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setDeleteModalVisibility(false)}
      />
    </div>
  );
};

export default DeleteFilmModal;
