/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Playlists = () => {
  const { films, isError } = useSelector((state) => state.filmsReducer);
  const playlistsEndpoint = 'http://localhost:3333/v1/events/';

  const firstPlaylist = {
    title: 'test',
    elements: ['js', 'sql', 'react'],
  };

  const [elements, addElement] = useState([]);

  const addFilm = (filmId) => {
    addElement([...elements, filmId]);
  };

  const addPlaylist = () => {
    fetch(playlistsEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(firstPlaylist),
    })
      .then((response) => response.json())
      .then((data) => console.log('ico i ico ??', data));
  };

  return (
    <section className="hero is-light">
      {console.log('USES TSATE ELEMENTS: ', elements)}
      <div className="hero-body">
        <div className="container">
          <h2 className="title is-2 has-text-centered is-uppercase mb-6">Playlists</h2>
          <button type="button" onClick={addPlaylist}>
            Fire
          </button>
          <section className="section">
            <div className="container">
              <h3 className="subtitle has-text-centered">Select films:</h3>
              <div className="columns">
                <div className="column is-offset-2 is-size-4">
                  <ul>
                    {films.map((film) => (
                      <li key={film.id} className="tags has-addons">
                        <span className="tag is-info">{film.title}</span>
                        {console.log('FILM ID:', film.id)}
                        <span className="tag is-dark clickable" onClick={() => addFilm(film.id)}>
                          check
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="column is-size-4">
                  <ul>
                    {elements.map((element) => (
                      <li key={element} className="tags has-addons">
                        <span className="tag is-primary">{element}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Playlists;
