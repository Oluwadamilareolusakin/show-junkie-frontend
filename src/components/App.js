import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideBar from './navigations/Sidebar';
import NavBar from './navigations/NavBar';
import SignupPage from './signup/SignupPage';
import Help from '../containers/modals/Help';
import Feedback from '../containers/modals/Feedback';
import Show from '../containers/shows/Show';
import LoginPage from './login/LoginPage';
import HomePage from './homepage/Homepage';
import EpisodeList from '../containers/shows/EpisodeList';
import SeasonList from '../containers/shows/SeasonList';
import { resetCreated } from '../actions/shared';


const App = (props) => {
  const { loggedIn } = props;

  const openModal = (modal) => {
    modal.classList.toggle('open');
  };

  const closeModal = (modal) => {
    const { resetCreated } = props;
    if (modal.classList.contains('open')) {
      modal.classList.toggle('open');
    }
    resetCreated();
  };

  const closeSideBar = () => {
    const sideBar = document.querySelector('.sidebar');
    if (sideBar.classList.contains('open')) { sideBar.classList.toggle('open'); }
  };

  document.addEventListener('click', closeSideBar);

  return (
    <Router>
      <SideBar openModal={modal => openModal(modal)} />
      <NavBar openModal={modal => openModal(modal)} />
      <Help closeModal={modal => closeModal(modal)} />
      <Feedback closeModal={modal => closeModal(modal)} />
      <Route exact path="/" component={loggedIn ? HomePage : HomePage} />
      <Route path="/show/:showname" component={Show} />
      <Route path="/login" component={LoginPage} />
      <Route path="/Signup" component={SignupPage} />
      <Route path="/logout" component={LoginPage} />
      <Route path="/episodes" component={EpisodeList} />
      <Route path="/seasons" component={SeasonList} />
    </Router>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.sessionReducer.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  resetCreated: () => dispatch(resetCreated()),
});

App.defaultProps = {
  resetCreated: () => {},
  loggedIn: false,
};

App.propTypes = {
  resetCreated: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
