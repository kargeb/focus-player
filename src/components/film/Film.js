import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';

const Film = () => {
  const { id } = useParams();
  const film = useSelector((state) => state.films.find((item) => item.id === id));

  return (
    <section className="section">
      <div className="container">
        <h4>URL id: {id}</h4>
        {console.log('Obj FILM:', film)}
        {console.log('film === undefined ', film === undefined)}
        {console.log('film !== undefined ', film !== undefined)}
        {/* {console.log('Object.keys(obj).length === 0 ', Object.keys(film).length === 0)} */}
        {film !== undefined ? (
          <div>
            <h4>FILM id: {film.id}</h4>
            <h2 className="subtitle is-4 pl-6">{film.title}:</h2>
            <p>{film.description}</p>
            <ReactPlayer url={film.video_url} controls />
          </div>
        ) : (
          <p>NIE MA FILMU W BAZIE</p>
        )}
      </div>
    </section>
  );
};

export default Film;
