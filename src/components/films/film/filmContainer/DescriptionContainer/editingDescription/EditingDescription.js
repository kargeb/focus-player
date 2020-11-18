import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editFilm } from '../../../../../../redux/reducer';

const EditingDescription = ({ film, setEdit, toggleEditMode }) => {
  const [editedTitle, setEditedTitle] = useState(film.title);
  const [editedDescription, setEditedDescription] = useState(film.description);

  const dispatch = useDispatch();
  const handleEdit = () => {
    const editedFilm = { ...film, title: editedTitle, description: editedDescription };
    dispatch(editFilm(editedFilm));
    setEdit(false);
  };

  return (
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
  );
};

export default EditingDescription;
