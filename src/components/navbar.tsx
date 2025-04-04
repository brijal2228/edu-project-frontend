import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '1rem 2rem',
      }}
    >
      <div className="container-fluid">
        <img
          src="logo eduexchange.jpg"
          alt="logo"
          style={{ width: '120px', height: '60px', marginRight: '1rem' }}
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
          <ul className="navbar-nav ms-auto" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="/"
                style={{ color: '#343a40', transition: 'color 0.3s' }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#007bff')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#343a40')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/books"
                style={{ color: '#343a40', transition: 'color 0.3s' }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#007bff')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#343a40')}
              >
                Books
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/notes"
                style={{ color: '#343a40', transition: 'color 0.3s' }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#007bff')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#343a40')}
              >
                Notes
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/login"
                style={{ color: '#343a40', transition: 'color 0.3s' }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#007bff')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#343a40')}
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/register"
                style={{ color: '#343a40', transition: 'color 0.3s' }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#007bff')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = '#343a40')}
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   Link: PropTypes.string,
// };
