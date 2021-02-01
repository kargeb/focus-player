/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddedFilmModal } from '../../../redux/filmsReducer';
import createThumbnail from '../../../helpers/createThumbnail';

const AddFilmModal = () => {
  const dispatch = useDispatch();
  const { currentFilm } = useSelector((state) => state.filmsReducer);

  useEffect(() => {
    return () => dispatch(closeAddedFilmModal());
  });

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => dispatch(closeAddedFilmModal())} />
      <div className="modal-content">
        <div className="box has-background-dark py-6">
          <h4 className="title is-size-3 post-title has-text-centered mb-3">Added successfully</h4>
          <Link as="div" to={`/films/${currentFilm.id}`}>
            <div className="media _added-film-container my-6">
              <figure className="media-left">
                <p className="image is-64x64  is-square _img-added-film-modal ">
                  <img
                    className="_img-added-film-modal"
                    alt="thumbnail"
                    src={createThumbnail(currentFilm.video_url)}
                  />
                </p>
              </figure>
              <div className="media-content">
                <div className="content has-text-light">
                  <p>
                    <strong className="content has-text-light">
                      {`${currentFilm.title.slice(0, 10)}...`}
                    </strong>
                    <br />
                    <span className="has-text-weight-light">{`${currentFilm.description.slice(
                      0,
                      20,
                    )}...`}</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <h4 className="title is-5 has-text-centered mb-5">What do you want to do now?</h4>
          <div className="buttons is-flex-direction-column _added-film-buttons-container is-align-items-flex-start">
            <a
              className="button  is-primary is-outlined is-flex is-justify-content-start is-fullwidth mb-4"
              onClick={() => dispatch(closeAddedFilmModal())}
            >
              <span className="icon">
                <span>
                  <i className="fas fa-plus fa-lg" />
                </span>
              </span>
              <span className="ml-4 is-size-6 has-text-white ">Add another film</span>
            </a>
            <Link
              to={`/films/${currentFilm.id}`}
              className="button is-primary is-outlined is-flex is-justify-content-start is-fullwidth mb-4"
            >
              <span className="icon">
                <span>
                  <i className="fas fa-play fa-lg" />
                </span>
              </span>
              <span className="ml-4 is-size-6 has-text-white ">Watch last added film</span>
            </Link>
            <Link
              className="button is-primary is-outlined is-flex is-justify-content-start is-fullwidth "
              to="/films"
            >
              <span className=" icon">
                <span>
                  <i className=" fas fa-th fa-lg" />
                </span>
              </span>
              <span className="ml-4 is-size-6 has-text-white  ">Back to all films</span>
            </Link>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        onClick={() => dispatch(closeAddedFilmModal())}
      />
    </div>
  );
};

export default AddFilmModal;
