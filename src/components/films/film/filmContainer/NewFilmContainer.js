/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactPlayer from 'react-player/youtube';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editFilm } from '../../../../redux/filmsReducer';
import TextContent from './textContent/TextContent';
import EditingTextContent from './textContent/EditingTextContent';
import DeleteFilmModal from './deleteFilmModal/DeleteFilmModal';

const FilmContainer = () => {
  const dispatch = useDispatch();
  const { currentFilm } = useSelector((state) => state.filmsReducer);
  const { isEdited } = useSelector((state) => state.filmsReducer);

  const [isWatched, setWatched] = useState(currentFilm.watched);
  const [editMode, setEditMode] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisibility] = useState(false);

  const handleCheckbox = () => {
    const editedFilm = {
      ...currentFilm,
      watched: !isWatched,
    };
    dispatch(editFilm(editedFilm));

    setWatched(editedFilm.watched);
  };

  return (
    <div className="container">
      <div className="column is-12 post">
        <article className="columns featured is-multiline">
          <div className="column is-6-widescreen is-offset-1-widescreen is-10-tablet is-offset-1-tablet ">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={currentFilm.video_url}
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="column is-4-widescreen is-offset-0-widescreen is-8-tablet is-offset-2-tablet featured-content">
            <div>
              <div className="is-flex is-justify-content-space-between is-align-items-center">
                {isEdited ? (
                  <button
                    type="button"
                    disabled
                    className="button is-loading is-primary is-size-4 is-medium _loading-button"
                  >
                    Loading
                  </button>
                ) : (
                  <a
                    className="button is-primary is-size-4 is-outlined _without-border is-medium is-flex is-align-items-center"
                    onClick={() => handleCheckbox()}
                  >
                    <span className="icon">
                      {isWatched ? (
                        <p>
                          <i className="fas fa-check-square fa-lg" />
                        </p>
                      ) : (
                        <span>
                          <i className="far fa-square fa-lg" />
                        </span>
                      )}
                    </span>
                    <span>watched</span>
                  </a>
                )}

                <div>
                  <a
                    type="button"
                    className={`button  is-primary _without-border ${
                      !editMode && 'is-outlined'
                    }  mr-4`}
                    onClick={() => setEditMode(!editMode)}
                  >
                    <span className="icon is-medium px-5">
                      <i className="fas fa-edit fa-lg" />
                    </span>
                  </a>
                  <a
                    type="button"
                    className="button is-primary _without-border is-outlined"
                    onClick={() => setDeleteModalVisibility(true)}
                  >
                    <span className="icon  is-medium px-5">
                      <i className="fas fa-trash-alt fa-lg" />
                    </span>
                  </a>
                </div>
              </div>
              <br />
              {editMode ? <EditingTextContent setEditMode={setEditMode} /> : <TextContent />}
            </div>
          </div>
        </article>
      </div>
      {isDeleteModalVisible && (
        <DeleteFilmModal setDeleteModalVisibility={setDeleteModalVisibility} />
      )}
    </div>
  );
};

export default FilmContainer;
