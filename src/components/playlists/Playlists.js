import { useSelector } from 'react-redux';

const Playlists = () => {
  const { films, isError } = useSelector((state) => state.filmsReducer);
  const playlistsEndpoint = 'http://localhost:3333/v1/events/';

  const firstPlaylist = {
    title: 'test',
    elements: ['js', 'sql', 'react'],
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
      <div className="hero-body">
        <div className="container">
          <h2 className="title is-2 has-text-centered is-uppercase mb-6">Playlists</h2>
          <button type="button" onClick={addPlaylist}>
            Fire
          </button>
          <section className="section">
            <div className="container">
              <h3 className="subtitle">Select films:</h3>
              <ul>
                {films.map((film) => (
                  <li key={film.id} className="tags has-addons">
                    <span className="tag is-info">{film.title}</span>
                    <span className="tag is-dark clickable">check</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Playlists;
