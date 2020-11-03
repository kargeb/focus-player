const FilmItem = () => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">John Smith as a video title</p>
        </div>
      </div>

      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <p>
          <a href="/"> https://link.pl </a>
          <a href="/">#css </a>
          <a href="/">#responsive</a>
        </p>
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
);

export default FilmItem;
