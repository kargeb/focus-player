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
        <article className="columns featured">
          {/* <div className="column is-7 post-img "> */}
          <div className="column is-6 is-offset-1 ">
            <ReactPlayer url={currentFilm.video_url} controls />

            {/* <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" /> */}
          </div>

          <div className="column is-5 featured-content va">
            <div>
              {/* <h3 className="heading post-category">Category Name</h3> */}
              <h1 className="title post-title">{currentFilm.title}</h1>
              <p className="post-excerpt">{currentFilm.description}</p>
              <br />
              <a href="https://ghost.io" className="button is-primary">
                Read More
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FilmContainer;
