import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../redux/reducer';
import FilmsList from './filmsList/FilmsList';
import loadingGif from '../../images/loading_transparent.gif';

const Films = () => {
  const dispatch = useDispatch();
  const { films, isError } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <h2 className="title is-2 ">All films</h2>
          {films.length ? (
            <FilmsList title="All films" films={films} />
          ) : (
            <div className="has-text-centered py-6 my-6">
              <img src={loadingGif} alt="loading gif" />
            </div>
          )}
          {isError && (
            <h3 className="subtitle is-4 has-text-danger">Sorry, we have some problems ...</h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default Films;
