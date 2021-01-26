import { useSelector } from 'react-redux';
import FilmsList from './filmsList/FilmsList';
import Loading from '../common/Loading';

const Films = () => {
  const { films, isError } = useSelector((state) => state.filmsReducer);

  return (
    // <section className="hero is-light">
    <section className="hero blog-posts">
      <div className="hero-body">
        <div className="container">
          {/* <h2 className="title is-2 has-text-centered is-uppercase mb-6">films</h2> */}
          {films.length ? <FilmsList title="All films" films={films} /> : <Loading />}

          {isError && (
            <h3 className="subtitle is-4 has-text-danger">Sorry, we have some problems ...</h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default Films;
