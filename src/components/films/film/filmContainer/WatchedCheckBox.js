import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editFilm } from '../../../../redux/filmsReducer';

const WatchedCheckBox = () => {
  const { currentFilm } = useSelector((state) => state.filmsReducer);
  const dispatch = useDispatch();

  const [isChecked, setCheckbox] = useState(false);
  const [isDisabled, setDisability] = useState(false);

  const handleCheckbox = (e) => {
    console.log('isCHECKED: ', isChecked);
    const editedFilm = {
      ...currentFilm,
      watched: !isChecked,
    };
    dispatch(editFilm(editedFilm));
    // dispatch(toggleEditFilmMode());
    setCheckbox(e.target.checked);
    console.log(e.target);
    setDisability(true);
    setTimeout(() => {
      setDisability(false);
    }, 2000);
  };

  useEffect(() => {});

  return (
    <div>
      <p>widac?</p>
      <label htmlFor="watched" className="checkbox ">
        <input
          id="watched"
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          onChange={(e) => handleCheckbox(e)}
        />
        Watched
      </label>
      {isDisabled && (
        <button type="button" className="button is-primary is-loading">
          Loading
        </button>
      )}
    </div>
  );
};

export default WatchedCheckBox;
