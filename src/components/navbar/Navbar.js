import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="main logo"
            />
          </a>

          <a
            role="button"
            className={`navbar-burger burger ${isActive}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample "
            href="/#"
            // onClick={() => setActive(isActive ? '' : 'is-active')}
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
                <div className="button is-primary is-vertical" href="/">
                  <div className="is-vcentered">
                    <span className="is-size-3">+</span> Add new film
                  </div>
                  {/* <div style={{ lineHeight: '24px' }}>Add new film</div> */}
                </div>
                <div className="button is-primary is-vertical" href="/">
                  <div className="is-size-3">+</div>
                  <div style={{ lineHeight: '24px' }}>Add new film</div>
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
};

export default Navbar;
