import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/navigations/sidebar.scss';

const SideBar = (props) => {
  const { closeModal } = props;
  const sideBar = () => document.querySelector('.sidebar');

  return (
    <div className="sidebar column">
      
      <div className="sidebar-link-holder row">
        <div className="home"></div><Link to="/" className="sidebar-link">Home</Link>
      </div>
      <div className="sidebar-link-holder row">
        <div className="your-shows"></div><Link to="/your-shows" className="sidebar-link">Your Shows</Link>
      </div>
      <div className="sidebar-link-holder row">
        <div className="profile"></div><Link to="/profile" className="sidebar-link">Profile</Link>
      </div>
      <div className="sidebar-link-holder row">
        <div className="help"></div><Link to="/help" className="sidebar-link">Help</Link>
      </div>
      <div className="sidebar-link-holder row">
        <div className="feedback"></div><Link to="/feedback" className="sidebar-link">Feedback</Link>
      </div>
      <div className="sidebar-link-holder row">
        <div className="logout"></div><Link exact to="/logout" className="sidebar-link">Logout</Link>
      </div>
    </div>
  );
}
SideBar.defaultProps = {
};

SideBar.propTypes = {
};


export default SideBar;
