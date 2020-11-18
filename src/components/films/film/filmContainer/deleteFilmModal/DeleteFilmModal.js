/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const DeleteFilmModal = ({ handleDelete, setDeleteModalOpen, isDeleteModalOpen }) => {
  return (
    <div className={`modal ${isDeleteModalOpen && `is-active`}`}>
      <div className="modal-background" onClick={() => setDeleteModalOpen(false)} />
      <div className="modal-content">
        <div className="box py-6">
          <h4 className="title is-5 has-text-centered mb-6">Delete this film?</h4>
          <div className="buttons is-centered">
            <button
              type="button"
              className="button is-primary is-outlined mr-4"
              onClick={() => handleDelete()}
            >
              Yes
            </button>
            <button
              type="button"
              className="button is-dark is-outlined ml-4"
              onClick={() => setDeleteModalOpen(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setDeleteModalOpen(false)}
      />
    </div>
  );
};

export default DeleteFilmModal;