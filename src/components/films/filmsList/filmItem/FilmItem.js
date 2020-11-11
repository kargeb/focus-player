import { Link } from 'react-router-dom';
import createThumbnail from '../../../../helpers/createThumbnail';

const FilmItem = ({ description, title, url, id }) => (
  <Link as="div" to={`/films/${id}`}>
    <div className="card">
      <div className="card-image">
        <figure className="image ">
          <img src={createThumbnail(url)} alt="Video thumbnail" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">
          <p>{description}</p>

          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </Link>
);

export default FilmItem;