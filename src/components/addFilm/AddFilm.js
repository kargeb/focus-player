import { Formik } from 'formik';

const AddFilm = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-offset-3 is-6">
              <h3 className="title is-3 has-text-centered">New film</h3>
              <Formik
                initialValues={{ url: '', title: '', desc: '' }}
                validate={(values) => {
                  const errors = {};
                  if (!values.url) {
                    errors.url = 'Required';
                  } else if (
                    !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
                      values.url,
                    )
                  ) {
                    errors.url = 'Invalid url address';
                  }

                  if (!values.title) {
                    errors.title = 'Required';
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <label className="label" htmlFor="url">
                        Url
                        <div className="control has-icons-left">
                          <input
                            id="url"
                            name="url"
                            className="input"
                            type="text"
                            placeholder="Video address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.url}
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-link" />
                          </span>
                        </div>
                      </label>
                      {console.log('url error:', errors.url)}
                      {errors.url && <p className="help is-danger">{errors.url}</p>}
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="title">
                        Title
                        <div className="control has-icons-left">
                          <input
                            id="title"
                            className="input"
                            type="text"
                            placeholder="Text input"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-heading" />
                          </span>
                        </div>
                      </label>
                      {errors.title && <p className="help is-danger">{errors.title}</p>}
                    </div>

                    <div className="field">
                      <label className="label" htmlFor="desc">
                        Description
                        <div className="control has-icons-left">
                          <input
                            id="desc"
                            className="input"
                            type="text"
                            placeholder="Description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.desc}
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-align-justify" />
                          </span>
                        </div>
                      </label>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <button type="submit" className="button is-link">
                          Add
                        </button>
                      </div>
                      <div className="control">
                        <button type="button" className="button is-link is-light">
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
      <div className="section">
        <div className="container">
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
                  values.email,
                )
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {/* {errors.email && touched.email && errors.email} */}
                {errors.email && <p className="help is-danger">This email is invalid</p>}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddFilm;

// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
