import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav className="navbar row">
      <div className="nav-left">
        <h3>Show Junkie</h3>
      </div>
      <div className="nav-right row">
        <div>
          <Link to="/" className="navbar-link">Home</Link>
        </div>
        <div>
          <Link to="/your-shows" className="navbar-link">Your Shows</Link>
        </div>
        <div>
          <Link to="/profile" className="navbar-link">Profile</Link>
        </div>
        <div>
          <Link to="/help" className="navbar-link">Help</Link>
        </div>
        <div>
          <Link to="/feedback" className="navbar-link">Feedback</Link>
        </div>
        <div>
          <Link to="/logout" className="navbar-link">Logout</Link>
        </div>
      </div>
    </nav>
  );
}

NavBar.defaultProps = {
  open: false,
}

NavBar.propTypes = {
  open: PropTypes.bool,
}


export default NavBar;