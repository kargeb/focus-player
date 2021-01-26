/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactPlayer from 'react-player/youtube';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteFilmModal from './deleteFilmModal/DeleteFilmModal';
import ButtonsContainer from './ButtonsContainer/ButtonsContainer';
import DescriptionContainer from './DescriptionContainer/DescriptionContainer';
import WatchedCheckBox from './WatchedCheckBox';

const FilmContainer = () => {
  const { currentFilm } = useSelector((state) => state.filmsReducer);
  const [isWatched, setWatched] = useState(false);

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
                <a
                  className="button is-primary is-size-4 is-outlined _without-border is-medium is-flex is-align-items-center"
                  onClick={() => setWatched(!isWatched)}
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

                <div>
                  <button
                    type="button"
                    className="button  is-primary _without-border is-outlined mr-4"
                    // onClick={() => dispatch(toggleEditFilmMode())}
                  >
                    <span className="icon is-medium px-5">
                      <i className="fas fa-edit fa-lg" />
                    </span>
                  </button>
                  <a
                    type="button"
                    className="button is-primary _without-border is-outlined"
                    // onClick={() => dispatch(toggleEditFilmMode())}
                  >
                    <span className="icon  is-medium px-5">
                      <i className="fas fa-trash-alt fa-lg" />
                    </span>
                  </a>
                </div>
              </div>
              <br />
              <h1 className="title post-title">{currentFilm.title}</h1>
              <p className="post-excerpt is-size-5">{currentFilm.description}</p>
              {/* <button type="button" className="button is-primary">
                edit
              </button>
              <button type="button" className="button is-primary">
                remove
              </button> */}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FilmContainer;
