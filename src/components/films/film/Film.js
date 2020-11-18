import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import loadingGif from '../../../images/loading_transparent.gif';
import FilmContainer from './filmContainer/FilmContainer';
import NoFilmPrompt from './noFilmPrompt/NoFilmPrompt';

const Film = () => {
  const { id } = useParams();
  const film = useSelector((state) => state.films.find((item) => item.id === id));
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <section className="section">
      <div className="container">
        {isLoading ? (
          <div className="has-text-centered py-6 my-6">
            <img src={loadingGif} alt="loading gif" />
          </div>
        ) : (
          <div>
            {
              // prettier-ignore
              film !== undefined
              ?
                <FilmContainer film={film} id={id} />
              :
                <NoFilmPrompt id={id} />
            }
          </div>
        )}
      </div>
    </section>
  );
};

export default Film;
