import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilmsList from './filmsList/FilmsList';
import loadingGif from '../../images/loading_transparent.gif';
import { fetchFilms } from '../../redux/reducer';

const Dashboard = () => {
  // const [films, setFilms] = useState('');
  // const [error, setError] = useState('');

  const dispatch = useDispatch();
  const { films, isError } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

  return (
    <section className="section has-background-white-bis">
      <div className="container">
        <h2 className="title is-2 has-text-black">Dashboard</h2>
        {films ? (
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
    </section>
  );
};

export default Dashboard;
