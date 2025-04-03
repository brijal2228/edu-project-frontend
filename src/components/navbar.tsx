import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { text } from 'stream/consumers';

export default function Navbar(
) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white 1875rem">
      <div className="container-fluid">
      <img src="logo eduexchange.jpg"  alt="logo" style={{ width: "100px", height: "55px" }} 
/>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active text-secondary" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/books">Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/notes">Notes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  Link: PropTypes.string,
};
