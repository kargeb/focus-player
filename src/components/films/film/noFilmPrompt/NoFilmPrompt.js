const NoFilmPrompt = ({ id }) => (
  <div className="notification is-danger is-light has-text-centered">
    <p> There is no video with this ID :&#40;</p>
    <p className="mt-2">{id}</p>
  </div>
);

export default NoFilmPrompt;
