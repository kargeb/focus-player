const FilmItem = ({ description, title, url }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{title}</p>
        </div>
      </div>

      <div className="content">
        {description}
        <p>
          <a href={url} target="_blank" rel="noreferrer">
            Link to the source
          </a>
        </p>
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
);

export default FilmItem;