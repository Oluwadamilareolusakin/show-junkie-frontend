import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../stylesheets/navigations/navbar.scss';

const NavBar = (props) => {
  const { openModal } = props;
  const handleModal = (event, modal) => {
    event.preventDefault();
    openModal(modal);
  };
  const helpModal = () => document.querySelector('.help-modal');
  const feedbackModal = () => document.querySelector('.feedback-modal');

  return (
    <nav className="navbar row">
      <div className="nav-left">
        <Link to="/">
          <h3>Show Junkie</h3>
        </Link>
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
          <Link className="navbar-link" onClick={(event) => handleModal(event, helpModal())}>Help</Link>
        </div>
        <div>
          <Link className="navbar-link" onClick={(event) => handleModal(event, feedbackModal())}>Feedback</Link>
        </div>
        <div>
          <Link to="/logout" className="navbar-link">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  openModal: false,
};

NavBar.propTypes = {
  openModal: PropTypes.func,
};


export default NavBar;
