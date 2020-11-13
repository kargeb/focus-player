import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import { deleteFilm, editFilm } from '../../redux/reducer';

import loadingGif from '../../images/loading_transparent.gif';

const Film = () => {
  const [isEdit, setEdit] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const film = useSelector((state) => state.films.find((item) => item.id === id));
  const isLoading = useSelector((state) => state.isLoading);

  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const toggleEditMode = () => {
    setEditedTitle(film.title);
    setEditedDescription(film.description);
    setEdit(!isEdit);
  };

  const handleDelete = () => {
    dispatch(deleteFilm(id));
  };

  const handleEdit = () => {
    const editedFilm = { ...film, title: editedTitle, description: editedDescription };
    console.log('FILM:', film);
    console.log('EditedFilm:', editedFilm);
    dispatch(editFilm(editedFilm));
    setEdit(false);
  };

  return (
    <section className="section">
      <div className="container">
        {isLoading ? (
          <div className="has-text-centered py-6 my-6">
            <img src={loadingGif} alt="loading gif" />
          </div>
        ) : (
          <div>
            {film !== undefined ? (
              <div>
                <div className="columns is-mobile">
                  <div className=" column is-offset-1-mobile is-offset-1-tablet is-offset-2-desktop is-6 has-text-left">
                    <p className="buttons">
                      <Link type="button" role="button" className="button mr-4" to="/films">
                        <span className="icon is-small px-5">
                          <i className="fas fa-long-arrow-alt-left" />
                        </span>
                      </Link>

                      {/* <button
                        type="button"
                        className={`button ${isEdit && 'is-primary is-outlined'} mr-4`}
                        onClick={toggleEditMode}
                      >
                        <span className="icon is-small px-5">
                          <i className="fas fa-edit" />
                        </span>
                      </button>
                      <button type="button" className="button" onClick={handleDelete}>
                        <span className="icon is-small px-5">
                          <i className="fas fa-trash-alt" />
                        </span>
                      </button> */}
                    </p>
                  </div>
                  <div className="column is-offset-1-mobile is-offset-2-tablet is-offset-1-desktop is-4">
                    <p className="buttons">
                      <button
                        type="button"
                        className={`button ${
                          isEdit && 'is-primary is-outlined'
                        } mr-4 is-hidden-mobile`}
                        onClick={toggleEditMode}
                      >
                        <span className="icon is-small px-5">
                          <i className="fas fa-edit" />
                        </span>
                      </button>
                      <button type="button" className="button" onClick={handleDelete}>
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
                        <button
                          className="button is-primary  mt-2"
                          type="button"
                          onClick={handleEdit}
                        >
                          Confirm changes
                        </button>
                        <button
                          className="button is-primary is-outlined  mt-2"
                          type="button"
                          onClick={toggleEditMode}
                        >
                          Discard
                        </button>
                      </div>
                    </div>
                    <div className="column is-offset-1 is-1">
                      <button
                        type="button"
                        className={`button  ${isEdit && 'is-primary is-outlined'} is-hidden`}
                        onClick={toggleEditMode}
                      >
                        <span className="icon is-small px-5">
                          <i className="fas fa-edit" />
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="columns is-mobile ">
                    <div className=" column is-offset-2-tablet is-offset-1-mobile  is-6  has-text-left">
                      <h2 className="title is-4 is-spaced is-capitalized">{film.title}</h2>
                      <p className="subtitle is-6 is-capitalized">{film.description}</p>
                    </div>
                    <div className="column is-offset-1  is-1  ">
                      <button
                        type="button"
                        // className={`button  ${isEdit && 'is-light'} is-hidden-tablet`}
                        className="button is-hidden-tablet"
                        onClick={toggleEditMode}
                      >
                        <span className="icon is-small px-5">
                          <i className="fas fa-edit" />
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="notification is-danger is-light has-text-centered">
                <p> Nie ma filmu z takim id :&#40;</p>
                <p className="mt-2">{id}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Film;
