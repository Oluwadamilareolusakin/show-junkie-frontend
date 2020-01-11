import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import SideBar from './navigations/Sidebar';
import SignupPage from './signup/SignupPage';
import LoginPage from './login/LoginPage';
import { connect } from 'react-redux';
import HomePage from './homepage/Homepage';

const App = (props) => {
  const { loggedIn } = props;
  
  return (
    <Router>
      <SideBar/>
      <Route exact path="/" component={loggedIn ? HomePage : LoginPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/Signup" component={SignupPage} />
      <Route path="/logout" component={LoginPage} />
    </Router>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.sessionReducer.loggedIn,
});

export default connect(mapStateToProps)(App);