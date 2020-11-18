import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { deleteFilm, editFilm } from '../../../../redux/reducer';
import DeleteFilmModal from './deleteFilmModal/DeleteFilmModal';
import ButtonsContainer from './ButtonsContainer/ButtonsContainer';

const FilmContainer = ({ film, id }) => {
  const [isEdit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const history = useHistory();

  const handleDelete = () => {
    dispatch(deleteFilm(id));
    setDeleteModalOpen(false);
    history.push('/films');
  };

  const toggleEditMode = () => {
    setEditedTitle(film.title);
    setEditedDescription(film.description);
    setEdit(!isEdit);
  };

  const handleEdit = () => {
    const editedFilm = { ...film, title: editedTitle, description: editedDescription };
    dispatch(editFilm(editedFilm));
    setEdit(false);
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
      {isEdit ? (
        <div className="columns">
          <div className=" column is-offset-2 is-6  has-text-left">
            <label className="label" htmlFor="editTitle">
              Title
              <input
                id="editTitle"
                className="input"
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </label>
            <label className="label" htmlFor="editDescription">
              Description
              <input
                id="editDescription"
                className="input"
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
            </label>
            <div className="buttons">
              <button className="button is-primary  mt-2" type="button" onClick={handleEdit}>
                Confirm changes
              </button>
              <button
                className="button is-dark is-outlined  mt-2"
                type="button"
                onClick={toggleEditMode}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default FilmContainer;
