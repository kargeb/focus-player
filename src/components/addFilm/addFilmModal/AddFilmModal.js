/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch } from 'react-redux';

const AddFilmModal = () => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => {}} />
      <div className="modal-content">
        <div className="box has-background-dark py-6">
          <h4 className="title post-title has-text-centered mb-6">Added successfully!</h4>

          <h4 className="title is-5 has-text-centered mb-5">What do you want to do now?</h4>
          <div className="buttons is-flex-direction-column _added-film-buttons-container is-align-items-flex-start">
            <a
              className="button is-primary is-size-4 is-outlined _without-border is-medium is-flex is-align-items-center"
              onClick={() => {}}
            >
              <span className="icon">
                <span>
                  <i className="fas fa-plus fa-lg" />
                </span>
              </span>
              <span className="ml-4 is-size-5 has-text-white has-text-weight-normal">
                Add another film
              </span>
            </a>
            <a
              className="button is-primary is-size-4 is-outlined _without-border is-medium is-flex is-align-items-center"
              onClick={() => {}}
            >
              <span className="icon">
                <span>
                  <i className="fas fa-play fa-lg" />
                </span>
              </span>
              <span className="ml-4 is-size-5 has-text-white has-text-weight-normal">
                Watch last added film
              </span>
            </a>
            <a
              className="button is-primary is-size-4 is-outlined _without-border is-medium is-flex is-align-items-center"
              onClick={() => {}}
            >
              <span className="icon">
                <span>
                  <i className="fas fa-th fa-lg" />
                </span>
              </span>
              <span className="ml-4 is-size-5 has-text-white has-text-weight-normal">
                Go back to library
              </span>
            </a>
          </div>

          {/* <div className="buttons is-centered">
            <button type="button" className="button is-light is-outlined mr-4" onClick={() => {}}>
              No
            </button>
            <button type="button" className="button is-primary is-outlined ml-4" onClick={() => {}}>
              Yes
            </button>
          </div> */}
        </div>
      </div>
      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        // onClick={() => setDeleteModalVisibility(false)}
        onClick={() => {}}
      />
    </div>
  );
};

export default AddFilmModal;
