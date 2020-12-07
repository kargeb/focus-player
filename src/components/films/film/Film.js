import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loading from '../../common/Loading';
import FilmContainer from './filmContainer/FilmContainer';
import NoFilmPrompt from './noFilmPrompt/NoFilmPrompt';
import { selectCurrentFilm } from '../../../redux/filmsReducer';

const Film = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  dispatch(selectCurrentFilm(id));
  const film = useSelector((state) => state.filmsReducer.currentFilm);
  const isLoading = useSelector((state) => state.filmsReducer.isLoading);

  return (
    <section className="section">
      {/* prettier-ignore */}
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {film !== undefined ?
              <FilmContainer/>
            :
              <NoFilmPrompt id={id} />}
          </div>
        )}
      </div>
    </section>
  );
};

export default Film;
