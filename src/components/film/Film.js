import ReactPlayer from 'react-player/youtube';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { test } from '../../redux/reducer';

const Film = () => {
  const { id } = useParams();
  const film = useSelector((state) => state.films.find((item) => item.id === id));
  console.log('ZNALAZLEM FILM: ', film);

  return (
    <section className="section">
      <div className="container">
        <h4>URL id: {id}</h4>
        <h4>FILM id: {film.id}</h4>
        <h2 className="subtitle is-4 pl-6">{film.title}:</h2>

        <p>{film.description}</p>

        <ReactPlayer url={film.video_url} controls />
      </div>
    </section>
  );
};

export default Film;
