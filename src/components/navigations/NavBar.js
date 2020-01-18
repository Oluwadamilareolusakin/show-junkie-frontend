import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../stylesheets/navigations/navbar.scss';

const NavBar = (props) => {
  const { openModal, signout } = props;
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
          onClick={event => handleModal(event, sideBar())}
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
          <p className="navbar-link accent-link">COMING SOON!: Profile</p>
        </div>
        <div>
          <button type="button" className="navbar-link nav-btn no-bg-btn" onClick={event => handleModal(event, helpModal())}>Help</button>
        </div>
        <div>
          <button type="button" className="navbar-link nav-btn no-bg-btn" onClick={event => handleModal(event, feedbackModal())}>Feedback</button>
        </div>
        <div>
          <button type="button" className="no-bg-btn" onClick={() => signout()}>
            <Link to="/" className="navbar-link">Logout</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  openModal: false,
  signout: () => {},
};

NavBar.propTypes = {
  openModal: PropTypes.func,
  signout: PropTypes.func,
};


export default NavBar;
