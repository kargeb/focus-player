import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { deleteFilm } from '../../redux/reducer';

const Film = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const film = useSelector((state) => state.films.find((item) => item.id === id));

  const handleDelete = () => {
    dispatch(deleteFilm(id));
  };

  return (
    <section className="section">
      <div className="container">
        {film !== undefined ? (
          <div>
            <div className="columns ">
              <div className=" column is-offset-2 is-6  has-text-left">
                <p className="buttons">
                  <Link to="/films">
                    <button type="button" className="button">
                      <span className="icon is-small px-5">
                        <i className="fas fa-long-arrow-alt-left" />
                      </span>
                    </button>
                  </Link>
                </p>
              </div>
              <div className="column is-2">
                <p className="buttons">
                  <button type="button" className="button" disabled>
                    <span className="icon is-small px-5">
                      <i className="fas fa-edit" />
                    </span>
                  </button>

                  <button type="button" className="button" onClick={handleDelete}>
                    <span className="icon is-small px-5">
                      <i className="fas fa-trash-alt" />
                    </span>
                  </button>
                </p>
              </div>
            </div>
            <div className="section ">
              <div className="center-by-flex">
                <ReactPlayer url={film.video_url} controls />
              </div>
            </div>
            <div className="columns">
              <div className=" column is-8 is-offset-2 has-text-left">
                <h2 className="title is-4 is-spaced is-capitalized">{film.title}</h2>
                <p className="subtitle is-6 is-capitalized">{film.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="notification is-danger is-light has-text-centered">
            <p> Nie ma filmu z takim id :&#40;</p>
            <p className="mt-2">{id}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Film;
