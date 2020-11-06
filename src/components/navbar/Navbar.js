import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar py-3 is-dark" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="main logo"
          />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href="/"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink activeClassName="is-active" className="navbar-item" exact to="/">
            Home
          </NavLink>

          <NavLink activeClassName="is-active" className="navbar-item" to="/film">
            Film
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button is-primary " href="/">
                <strong>
                  <span className="is-size-3">+</span>
                  <span>Add new film</span>
                </strong>
              </div>
              <a className="button is-light" href="/">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
