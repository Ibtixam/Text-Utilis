import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
const Navbar = ({ mode, toggleMode }) => {
  const [navStyle] = useState({
    color: '#06B6D4',
    fontSize: '22px',
    fontWeight: '900',
  });
  const location = useLocation();

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        data-bs-theme={`${mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" style={navStyle} to="/">
            TextUtilz
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/' ? 'active' : ''
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/about' ? 'active' : ''
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === '/contact' ? 'active' : ''
                  }`}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch form-check-reverse">
              <label
                className={`form-check-label text-${
                  mode === 'light' ? 'dark' : 'light'
                }`}
                htmlFor="flexSwitchCheckDefault"
              >{`${mode === 'light' ? 'Enable' : 'Disable'} Dark Mode`}</label>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onChange={toggleMode}
                checked={mode === 'dark' ? true : false}
              />
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'title is here',
  home: 'Home',
  about: 'About',
  services: 'Services',
  contact: 'Contact Us',
};

export default Navbar;
