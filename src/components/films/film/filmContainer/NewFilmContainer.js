/* eslint-disable jsx-a11y/anchor-is-valid */
import ReactPlayer from 'react-player/youtube';

import { useSelector } from 'react-redux';
import DeleteFilmModal from './deleteFilmModal/DeleteFilmModal';
import ButtonsContainer from './ButtonsContainer/ButtonsContainer';
import DescriptionContainer from './DescriptionContainer/DescriptionContainer';
import WatchedCheckBox from './WatchedCheckBox';

const FilmContainer = () => {
  const { currentFilm } = useSelector((state) => state.filmsReducer);
  return (
    <div className="container">
      <div className="column is-12 post">
        <article className="columns featured is-multiline">
          {/* <div className="column is-7 post-img "> */}
          {/* <div className="column  "> */}
          <div className="column is-6-widescreen is-offset-1-widescreen is-10-tablet is-offset-1-tablet ">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={currentFilm.video_url}
                controls
                width="100%"
                // height="100%"
              />
            </div>

            {/* <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" /> */}
          </div>

          {/* <div className="column  featured-content va"> */}
          <div className="column is-4-widescreen is-offset-0-widescreen is-8-tablet is-offset-2-tablet featured-content va">
            <div>
              {/* <h3 className="heading post-category">Category Name</h3> */}
              <h1 className="title post-title">{currentFilm.title}</h1>
              <p className="post-excerpt">{currentFilm.description}</p>
              <br />
              {/* <a href="https://ghost.io" className="button is-primary">
                Read More
              </a> */}
              <div className="is-flex is-justify-content-space-between ">
                <span className="icon-text has-text-primary is-flex is-align-items-center">
                  <span className="icon is-medium">
                    <i className="far fa-square fa-lg" />
                  </span>
                  <span>Watched</span>
                </span>

                <div>
                  <button
                    type="button"
                    className="button is-primary _without-border is-outlined mr-4 is-hidden-mobile"
                    // onClick={() => dispatch(toggleEditFilmMode())}
                  >
                    <span className="icon  is-small px-5">
                      <i className="fas fa-edit" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="button is-primary _without-border is-outlined is-hidden-mobile"
                    // onClick={() => dispatch(toggleEditFilmMode())}
                  >
                    <span className="icon  is-small ">
                      <i className="fas fa-trash-alt" />
                    </span>
                  </button>
                </div>
              </div>

              <button type="button" className="button is-primary">
                edit
              </button>
              <button type="button" className="button is-primary">
                remove
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FilmContainer;
