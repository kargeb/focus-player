import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';

const Film = () => {
  console.log('jestem w filmie');

  const { id } = useParams();
  console.log('USE PARAMS, ', useParams());

  return (
    <section className="section">
      <div className="container">
        <h4>id: {id}</h4>
        <h2 className="subtitle is-4 pl-6">Player:</h2>

        <p>JEST FILM</p>
        <ReactPlayer url="https://www.youtube.com/watch?v=iIhOfk5IEQg" controls />
      </div>
    </section>
  );
};

export default Film;
