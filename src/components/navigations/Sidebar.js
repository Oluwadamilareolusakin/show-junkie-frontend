import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/navigations/sidebar.scss';

const SideBar = (props) => {
  const { closeModal } = props;
  const sideBar = () => document.querySelector('.sidebar');

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
        <Link to="/help" className="sidebar-link">Help</Link>
      </div>
      <div className="sidebar-link-holder row">
        <div className="feedback" />
        <Link to="/feedback" className="sidebar-link">Feedback</Link>
      </div>
      <div className="sidebar-link-holder row">
        <div className="logout" />
        <Link exact to="/logout" className="sidebar-link">Logout</Link>
      </div>
    </div>
  );
};
SideBar.defaultProps = {
};

SideBar.propTypes = {
};


export default SideBar;
