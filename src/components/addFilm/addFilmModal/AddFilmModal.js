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
          <h4 className="title is-size-3 post-title has-text-centered mb-3">Added successfully</h4>
          <div className="media _added-film-container my-6">
            <figure className="media-left">
              <p className="image is-64x64">
                <img alt="thumbnail" src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong className="content has-text-primary">John Smith</strong>
                  <br />
                  Lorem ipsum dolor ...
                </p>
              </div>
            </div>
          </div>
          <h4 className="title is-5 has-text-centered mb-5">What do you want to do now?</h4>
          <div className="buttons is-flex-direction-column _added-film-buttons-container is-align-items-flex-start">
            <a
              className="button  is-primary is-outlined is-flex is-justify-content-start is-fullwidth mb-4"
              onClick={() => {}}
            >
              <span className="icon">
                <span>
                  <i className="fas fa-plus fa-lg" />
                </span>
              </span>
              <span className="ml-4 is-size-6 has-text-white ">Add another film</span>
            </a>
            <a
              className="button is-primary is-outlined is-flex is-justify-content-start is-fullwidth mb-4"
              onClick={() => {}}
            >
              <span className="icon">
                <span>
                  <i className="fas fa-play fa-lg" />
                </span>
              </span>
              <span className="ml-4 is-size-6 has-text-white ">Watch last added film</span>
            </a>
            <a
              className="button is-primary is-outlined is-flex is-justify-content-start is-fullwidth "
              onClick={() => {}}
            >
              <span className=" icon">
                <span>
                  <i className=" fas fa-th fa-lg" />
                </span>
              </span>
              <span className="ml-4 is-size-6 has-text-white  ">Go back to library</span>
            </a>
          </div>
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
