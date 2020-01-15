import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/navigations/sidebar.scss';

const SideBar = () => (
  <div className="sidebar">
    <div>
      <Link to="/" className="sidebar-links">Home</Link>
    </div>
    <div>
      <Link to="/your-shows" className="sidebar-links">Your Shows</Link>
    </div>
    <div>
      <Link to="/profile" className="sidebar-links">Profile</Link>
    </div>
    <div>
      <Link to="/help" className="sidebar-links">Help</Link>
    </div>
    <div>
      <Link to="/feedback" className="sidebar-links">Feedback</Link>
    </div>
    <div>
      <Link exact to="/logout" className="sidebar-links">Logout</Link>
    </div>
  </div>
);

SideBar.defaultProps = {
};

SideBar.propTypes = {
};


export default SideBar;
