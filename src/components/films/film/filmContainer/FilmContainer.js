/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { deleteFilm, editFilm } from '../../../../redux/reducer';

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
      <div className={`modal ${isDeleteModalOpen && `is-active`}`}>
        <div className="modal-background" onClick={() => setDeleteModalOpen(false)} />
        <div className="modal-content">
          <div className="box py-6">
            <h4 className="title is-5 has-text-centered mb-6">Delete this film?</h4>
            <div className="buttons is-centered">
              <button
                type="button"
                className="button is-primary is-outlined mr-4"
                onClick={() => handleDelete()}
              >
                Yes
              </button>
              <button
                type="button"
                className="button is-dark is-outlined ml-4"
                onClick={() => setDeleteModalOpen(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setDeleteModalOpen(false)}
        />
      </div>
      <div className="columns is-mobile">
        <div className=" column is-offset-1-mobile is-offset-1-tablet is-offset-2-desktop is-6 has-text-left">
          <p className="buttons">
            <Link type="button" role="button" className="button mr-4" to="/films">
              <span className="icon is-small px-5">
                <i className="fas fa-long-arrow-alt-left" />
              </span>
            </Link>
          </p>
        </div>
        <div className="column is-offset-1-mobile is-offset-2-tablet is-offset-1-desktop is-4">
          <p className="buttons">
            <button
              type="button"
              className={`button ${isEdit && 'is-primary is-outlined'} mr-4 is-hidden-mobile`}
              onClick={toggleEditMode}
            >
              <span className="icon is-small px-5">
                <i className="fas fa-edit" />
              </span>
            </button>
            <button type="button" className="button" onClick={() => setDeleteModalOpen(true)}>
              <span className="icon is-small px-5">
                <i className="fas fa-trash-alt" />
              </span>
            </button>
          </p>
        </div>
      </div>
      <div className="section ">
        <div className="custom_center-by-flex">
          <ReactPlayer url={film.video_url} controls />
        </div>
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
