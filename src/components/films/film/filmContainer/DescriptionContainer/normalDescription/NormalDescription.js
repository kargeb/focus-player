const NormalDescription = ({ film, toggleEditMode }) => (
  <div className="columns is-mobile ">
    <div className=" column is-offset-2-tablet is-offset-1-mobile  is-6  has-text-left">
      <h2 className="title is-4 is-spaced is-capitalized">{film.title}</h2>
      <p className="subtitle is-6 is-capitalized">{film.description}</p>
    </div>
    <div className="column is-offset-1  is-1  ">
      <button type="button" className="button is-hidden-tablet" onClick={toggleEditMode}>
        <span className="icon is-small px-5">
          <i className="fas fa-edit" />
        </span>
      </button>
    </div>
  </div>
);

export default NormalDescription;
