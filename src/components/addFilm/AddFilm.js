import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addFilm, filmsReducer } from '../../redux/filmsReducer';

const AddFilm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { addFilmLoading } = useSelector((state) => state.filmsReducer);

  const runDispatch = (newFilm) => {
    dispatch(addFilm(newFilm));
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-offset-3 is-6">
              <h3 className="title is-3 has-text-centered">New film</h3>
              <Formik
                initialValues={{
                  video_url: '',
                  title: '',
                  description: '',
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.video_url) {
                    errors.video_url = 'Required';
                  } else if (
                    !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
                      values.video_url,
                    )
                  ) {
                    errors.video_url = 'Invalid url address';
                  }

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
                onSubmit={(values, { resetForm }) => {
                  const newVales = { ...values, watched: false };
                  // console.log('values z add film', values);
                  // values[watched] = true;
                  // console.log('values z watched add film', newVales);
                  runDispatch(newVales);
                  resetForm();
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="field mb-4">
                      <label className="label" htmlFor="video_url">
                        Url
                        <div className="control has-icons-left">
                          <input
                            id="video_url"
                            name="video_url"
                            className="input"
                            type="text"
                            placeholder="Video address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.video_url}
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-link" />
                          </span>
                        </div>
                      </label>
                      {errors.video_url && touched.video_url && (
                        <p className="help is-danger">{errors.video_url}</p>
                      )}
                    </div>
                    <div className="field mb-4">
                      <label className="label" htmlFor="title">
                        Title
                        <div className="control has-icons-left">
                          <input
                            id="title"
                            className="input"
                            type="text"
                            placeholder="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-heading" />
                          </span>
                        </div>
                      </label>
                      {errors.title && touched.title && (
                        <p className="help is-danger">{errors.title}</p>
                      )}
                    </div>

                    <div className="field mb-4">
                      <label className="label" htmlFor="description">
                        Description
                        <div className="control has-icons-left">
                          <input
                            id="description"
                            className="input"
                            type="text"
                            placeholder="At least 10 characters ..."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-align-justify" />
                          </span>
                        </div>
                      </label>
                      {errors.description && touched.description && (
                        <p className="help is-danger">{errors.description}</p>
                      )}
                    </div>
                    <div className="field is-grouped mt-5">
                      <div className="control">
                        <button
                          type="submit"
                          className={`button is-primary ${
                            addFilmLoading && 'is-loading'
                          } px-5 has-text-weight-bold`}
                          disabled={addFilmLoading}
                        >
                          Add
                        </button>
                      </div>
                      <div className="control">
                        <button
                          type="button"
                          className="button is-dark is-outlined"
                          onClick={() => history.goBack()}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddFilm;
