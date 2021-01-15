import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { editFilm } from '../../../../../../redux/filmsReducer';
import { toggleEditFilmMode } from '../../../../../../redux/editFilmReducer';

const EditingDescription = () => {
  const dispatch = useDispatch();
  const { currentFilm } = useSelector((state) => state.filmsReducer);

  const handleEdit = (values) => {
    const editedFilm = {
      ...currentFilm,
      title: values.title,
      watched: true,
      description: values.description,
    };
    dispatch(editFilm(editedFilm));
    dispatch(toggleEditFilmMode());
  };

  return (
    <div className="columns">
      <div className=" column is-offset-2 is-6  has-text-left">
        <Formik
          initialValues={{
            title: currentFilm.title,
            description: currentFilm.description,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
            }

            if (!values.description) {
              errors.description = 'Required';
            } else if (values.description.length < 10) {
              errors.description = 'Length must be at least 10 characters long';
            }

            return errors;
          }}
          onSubmit={(values) => {
            handleEdit(values);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="field mb-4">
                <label className="label" htmlFor="title">
                  Title
                  <div className="control">
                    <input
                      id="title"
                      className="input"
                      type="text"
                      placeholder="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                    />
                  </div>
                </label>
                {errors.title && touched.title && <p className="help is-danger">{errors.title}</p>}
              </div>

              <div className="field mb-4">
                <label className="label" htmlFor="description">
                  Description
                  <div className="control">
                    <input
                      id="description"
                      className="input"
                      type="text"
                      placeholder="At least 10 characters ..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                  </div>
                </label>
                {errors.description && touched.description && (
                  <p className="help is-danger">{errors.description}</p>
                )}
              </div>
              <div className="field is-grouped mt-5">
                <div className="control">
                  <button type="submit" className="button is-primary px-5 has-text-weight-bold">
                    Confirm changes
                  </button>
                </div>
                <div className="control">
                  <button
                    type="button"
                    className="button is-dark is-outlined"
                    onClick={() => dispatch(toggleEditFilmMode())}
                  >
                    Discard
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditingDescription;
