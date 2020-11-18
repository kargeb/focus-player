import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { deleteFilm, editFilm } from '../../../../redux/reducer';
import DeleteFilmModal from './deleteFilmModal/DeleteFilmModal';
import ButtonsContainer from './ButtonsContainer/ButtonsContainer';
import DescriptionContainer from './DescriptionContainer/DescriptionContainer';

const FilmContainer = ({ film, id }) => {
  const [isEdit, setEdit] = useState(false);
  const dispatch = useDispatch();
  //   const [editedTitle, setEditedTitle] = useState('');
  //   const [editedDescription, setEditedDescription] = useState('');
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const history = useHistory();

  const handleDelete = () => {
    dispatch(deleteFilm(id));
    setDeleteModalOpen(false);
    history.push('/films');
  };

  const toggleEditMode = () => {
    //   setEditedTitle(film.title);
    //   setEditedDescription(film.description);
    setEdit(!isEdit);
  };

  return (
    <div>
      <DeleteFilmModal
        setDeleteModalOpen={setDeleteModalOpen}
        handleDelete={handleDelete}
        isDeleteModalOpen={isDeleteModalOpen}
      />
      <ButtonsContainer
        isEdit={isEdit}
        toggleEditMode={toggleEditMode}
        setDeleteModalOpen={setDeleteModalOpen}
      />
      <div className="mt-5 mb-6 custom_center-by-flex">
        <ReactPlayer url={film.video_url} controls />
      </div>
      <DescriptionContainer
        isEdit={isEdit}
        film={film}
        toggleEditMode={toggleEditMode}
        setEdit={setEdit}
      />
    </div>
  );
};

export default FilmContainer;
