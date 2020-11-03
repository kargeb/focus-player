import FilmItem from './filmItem/FilmItem';
import { getAllFilms } from '../../../helpers/apiFunctions';

const FilmsList = ({ title, columns = 3 }) => (
  <div>
    <h3 className="subtitle is-4 has-text-weight-medium">{title}</h3>
    <ul className="columns is-multiline">
      {getAllFilms().map((item) => (
        <li key={item} className={`column is-${columns}`}>
          <FilmItem />
        </li>
      ))}
    </ul>
  </div>
);

export default FilmsList;
