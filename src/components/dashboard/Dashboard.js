import { useState, useEffect } from 'react';
import FilmsList from './filmsList/FilmsList';

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
    <div className="section has-background-white-bis">
      <div className="container">
        <div className="title is-2 has-text-black">Dashboard</div>
        {films && <FilmsList title="All films" films={films} />}
      </div>
      {error && (
        <h3 className="subtitle is-4 has-text-danger">
          Sorry, we have some problems ... - {error}
        </h3>
      )}
    </div>
  );
};

export default Dashboard;
