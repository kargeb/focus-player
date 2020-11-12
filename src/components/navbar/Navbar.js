import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Focus-logo-2.svg';

const Navbar = () => {
  const [isActive, setActive] = useState('');

  const handleMenuButtonClick = (e) => {
    e.preventDefault();
    setActive(isActive ? '' : 'is-active');
  };

  return (
    <nav className="navbar py-3 is-dark" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              // src="https://bulma.io/images/bulma-logo.png"
              src={logo}
              // width="112"
              height="150"
              // height="100%"
              alt="main logo"
            />
          </a>
          <div>
            <img src={logo} alt="logo" width="200" />
          </div>
          <a
            role="button"
            className={`navbar-burger burger ${isActive}`}
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
          <div className="navbar-start">
            <NavLink activeClassName="is-active" className="navbar-item" exact to="/">
              Home
            </NavLink>

            <NavLink activeClassName="is-active" className="navbar-item" to="/films">
              Films
            </NavLink>
          </div>
          <div className="navbar-end">
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
