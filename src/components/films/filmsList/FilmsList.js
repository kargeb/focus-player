import FilmItem from './filmItem/FilmItem';

const FilmsList = ({ films, columns = 3 }) => (
  <div>
    <ul className="columns is-multiline">
      {films
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((item) => (
          <li key={item.id} className={`column is-${columns}`}>
            <FilmItem
              description={item.description}
              title={item.title}
              url={item.video_url}
              id={item.id}
              timestamp={item.timestamp}
              watched={item.watched}
            />
          </li>
        ))}
    </ul>
  </div>
);

export default FilmsList;
