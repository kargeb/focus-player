import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/main-logo.svg';

const Navbar = () => {
  const [isActive, setActive] = useState('');

  const handleMenuButtonClick = (e) => {
    e.preventDefault();
    setActive(isActive ? '' : 'is-active');
  };

  return (
    <nav className="navbar  py-3 is-dark" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="custom_main-logo navbar-item" to="/">
            <img src={logo} alt="main logo" />
          </Link>
          <a
            role="button"
            className={`navbar-burger custom_nav-burger burger ${isActive}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample "
            href="/#"
            onClick={(e) => handleMenuButtonClick(e)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive}`}>
          {/* <div className="navbar-end"> */}

          {/* <div className="navbar-start">
            <NavLink
              activeClassName="is-active"
              className="navbar-item px-5 ml-4 is-size-5"
              exact
              to="/playlists"
            >
              Playlists
            </NavLink>
          </div> */}
          <div className="navbar-end">
            <div className="navbar-item">
              <NavLink
                activeClassName="is-active"
                className="navbar-item px-5 ml-4 is-size-5 "
                exact
                to="/films"
              >
                Films
              </NavLink>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <NavLink activeClassName="is-active" className="button is-primary" to="/add-film">
                  <span className="icon is-small">
                    <i className="fas fa-plus" />
                  </span>
                  <span>
                    <strong>Add new film</strong>
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
