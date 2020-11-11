import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';

const Film = () => {
  const { id } = useParams();
  const film = useSelector((state) => state.films.find((item) => item.id === id));

  return (
    <section className="section">
      <div className="container">
        {film !== undefined ? (
          <div>
            <div className="columns ">
              <div className=" column is-8 is-offset-2 has-text-left">
                <p className="buttons">
                  <button type="button" className="button">
                    <span className="icon is-small px-5">
                      <i className="fas fa-long-arrow-alt-left" />
                    </span>
                  </button>
                </p>
              </div>
            </div>
            <div className="section ">
              <div className="center-by-flex">
                {/* <div className="is-flex-direction-row is-justify-content-center"> */}
                <ReactPlayer url={film.video_url} controls />
              </div>
            </div>
            <div className="columns">
              <div className=" column is-8 is-offset-2 has-text-left">
                <h2 className="title is-4 is-spaced">{film.title}</h2>
                <p className="subtitle is-6">{film.description}</p>
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
