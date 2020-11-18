import { Link } from 'react-router-dom';

const ButtonsContainer = ({ isEdit, toggleEditMode, setDeleteModalOpen }) => (
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
          className={`button ${isEdit && 'is-primary is-outlined'} mr-4 is-hidden-mobile`}
          onClick={toggleEditMode}
        >
          <span className="icon is-small px-5">
            <i className="fas fa-edit" />
          </span>
        </button>
        <button type="button" className="button" onClick={() => setDeleteModalOpen(true)}>
          <span className="icon is-small px-5">
            <i className="fas fa-trash-alt" />
          </span>
        </button>
      </p>
    </div>
  </div>
);

export default ButtonsContainer;
