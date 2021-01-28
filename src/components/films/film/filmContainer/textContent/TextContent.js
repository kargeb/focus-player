import { useSelector } from 'react-redux';

const TextContent = () => {
  const { currentFilm } = useSelector((state) => state.filmsReducer);

  return (
    <div>
      <h1 className="title post-title">{currentFilm.title}</h1>
      <p className="post-excerpt is-size-5 _description">{currentFilm.description}</p>
    </div>
  );
};

export default TextContent;
