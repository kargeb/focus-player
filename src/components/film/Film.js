import ReactPlayer from 'react-player/youtube';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { test } from '../../redux/reducer';

const Film = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const testValue = useSelector((state) => state.testValue);

  return (
    <section className="section">
      <div className="container">
        <h4>id: {id}</h4>
        <h2 className="subtitle is-4 pl-6">Player:</h2>

        <p>JEST FILM</p>

        <ReactPlayer url="https://www.youtube.com/watch?v=iIhOfk5IEQg" controls />
      </div>
      <div className="has-background-white-bis has-text-centered my-4">
        <h2 className="is-size-2 has-text-success">{testValue}</h2>
        <button type="button" className="button is-dark" onClick={() => dispatch(test())}>
          Click
        </button>
      </div>
    </section>
  );
};

export default Film;
