import { useState, useEffect } from 'react';
import FilmsList from './filmsList/FilmsList';
import loadingGif from '../../images/loading_transparent.gif';
import Film from '../film/Film';

const Dashboard = () => {
  const [films, setFilms] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://agile-depths-96654.herokuapp.com/v1/movies')
      .then((response) => response.json())
      .then((data) => {
        console.log('PObraliśmy dane', data);
        setFilms(data);
      })
      .catch(() => setError("can't load data"));

    console.log('Odalilem sie w use EFFECT');
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
        {error && (
          <h3 className="subtitle is-4 has-text-danger">
            Sorry, we have some problems ... - {error}
          </h3>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
