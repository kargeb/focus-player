import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEditFilmMode, toggleDeleteFilmModal } from '../../../../../redux/editFilmReducer';

const ButtonsContainer = () => {
  const dispatch = useDispatch();
  const { isEditMode } = useSelector((state) => state.editFilmReducer);

  return (
    <div className="columns is-mobile">
      <div className=" column is-offset-1-mobile is-offset-1-tablet is-offset-2-desktop is-6 has-text-left">
        <p className="buttons">
          <Link type="button" role="button" className="button mr-4" to="/films">
            <span className="icon is-small px-5">
              <i className="fas fa-long-arrow-alt-left" />
            </span>
          </Link>
        </p>
      </div>
      <div className="column is-offset-1-mobile is-offset-2-tablet is-offset-1-desktop is-4">
        <p className="buttons">
          <button
            type="button"
            className={`button ${isEditMode && 'is-primary is-outlined'} mr-4 is-hidden-mobile`}
            onClick={() => dispatch(toggleEditFilmMode())}
          >
            <span className="icon is-small px-5">
              <i className="fas fa-edit" />
            </span>
          </button>
          <button
            type="button"
            className="button"
            onClick={() => dispatch(toggleDeleteFilmModal())}
          >
            <span className="icon is-small px-5">
              <i className="fas fa-trash-alt" />
            </span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default ButtonsContainer;
