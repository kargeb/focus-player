import ReactPlayer from 'react-player/youtube';
import { useSelector } from 'react-redux';
import DeleteFilmModal from './deleteFilmModal/DeleteFilmModal';
import ButtonsContainer from './ButtonsContainer/ButtonsContainer';
import DescriptionContainer from './DescriptionContainer/DescriptionContainer';

const FilmContainer = ({ film }) => {
  const { currentFilm } = useSelector((state) => state.filmsReducer);
  return (
    <div>
      <DeleteFilmModal />
      <ButtonsContainer />
      <div className="mt-5 mb-6 custom_center-by-flex">
        <ReactPlayer url={currentFilm.video_url} controls />
      </div>
      <DescriptionContainer film={film} />
    </div>
  );
};

export default FilmContainer;
