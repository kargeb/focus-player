import FilmItem from './filmItem/FilmItem';
// import { getAllFilms } from '../../../helpers/apiFunctions';

const FilmsList = ({ title, films, columns = 3 }) => (
  <div>
    <h3 className="subtitle is-4 has-text-weight-medium">{title}</h3>
    {console.log(films[0])}
    <ul className="columns is-multiline">
      {films.map((item) => (
        <li key={item.id} className={`column is-${columns}`}>
          <FilmItem description={item.description} title={item.title} url={item.video_url} />
        </li>
      ))}
    </ul>
  </div>
);

export default FilmsList;
