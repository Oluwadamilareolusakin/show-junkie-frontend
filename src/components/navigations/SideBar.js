import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../stylesheets/navigations/sidebar.scss';

const SideBar = (props) => {
  const { openModal, signout } = props;
  const handleModal = (event, modal) => {
    event.preventDefault();
    openModal(modal);
  };
  const helpModal = () => document.querySelector('.help-modal');
  const feedbackModal = () => document.querySelector('.feedback-modal');

  return (
    <div className="sidebar column">

      <div className="sidebar-link-holder row">
        <div className="home" />
        <Link to="/" className="sidebar-link">Home</Link>
      </div>
      <div className="sidebar-link-holder row">
        <div className="your-shows" />
        <Link to="/your-shows" className="sidebar-link">Your Shows</Link>
      </div>
      <div className="sidebar-link-holder row">
        <div className="profile" />
        <Link to="/profile" className="sidebar-link">Profile</Link>
      </div>
      <div className="sidebar-link-holder row">
        <div className="help" />
        <button type="button" className="no-bg-btn sidebar-link" onClick={event => handleModal(event, helpModal())}>Help</button>
      </div>
      <div className="sidebar-link-holder row">
        <div className="feedback" />
        <button type="button" className="no-bg-btn sidebar-link" onClick={event => handleModal(event, feedbackModal())}>Feedback</button>
      </div>
      <div className="sidebar-link-holder row">
        <div className="signout" />
        <button className="no-bg-btn" onClick={() => signout()}>
          Logout
        </button>
      </div>
    </div>
  );
};
SideBar.defaultProps = {
  openModal: () => {},
  signout: () => {},
};

SideBar.propTypes = {
  openModal: PropTypes.func,
  signout: PropTypes.func,
};


export default SideBar;
