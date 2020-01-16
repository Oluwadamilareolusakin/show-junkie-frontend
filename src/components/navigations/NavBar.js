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
  const sideBar = () => document.querySelector('.sidebar');

  return (
    <nav className="navbar row">
      <div className="nav-left row">
        <button
          label="button"
          type="button"
          onClick={(event) => handleModal(event, sideBar())}
          className="mobile-menu no-bg-btn"
        />
        <Link to="/" className="logo">
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
          <button type="button" className="navbar-link nav-btn no-bg-btn" onClick={(event) => handleModal(event, helpModal())}>Help</button>
        </div>
        <div>
          <button type="button" className="navbar-link nav-btn no-bg-btn" onClick={(event) => handleModal(event, feedbackModal())}>Feedback</button>
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
