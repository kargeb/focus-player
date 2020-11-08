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
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi.test(
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
                  <form>
                    <div className="field">
                      <label className="label" htmlFor="url">
                        Label
                        <div className="control">
                          <input id="url" className="input" type="text" placeholder="Text input" />
                        </div>
                      </label>
                      <p className="help is-success">This is a help text</p>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="title">
                        Username
                        <div className="control has-icons-left has-icons-right">
                          <input
                            id="title"
                            className="input is-success"
                            type="text"
                            placeholder="Text input"
                            value="bulma"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-user" />
                          </span>
                          <span className="icon is-small is-right">
                            <i className="fas fa-check" />
                          </span>
                        </div>
                      </label>
                      <p className="help is-success">This username is available</p>
                    </div>

                    <div className="field">
                      <label className="label" htmlFor="desc">
                        Email
                        <div className="control has-icons-left has-icons-right">
                          <input
                            id="desc"
                            className="input is-danger"
                            type="email"
                            placeholder="Email input"
                            value="hello@"
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                          </span>
                          <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle" />
                          </span>
                        </div>
                      </label>
                      <p className="help is-danger">This email is invalid</p>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <button type="submit" className="button is-link">
                          Submit
                        </button>
                      </div>
                      <div className="control">
                        <button type="button" className="button is-link is-light">
                          Cancel
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
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
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
                  type="email"
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
