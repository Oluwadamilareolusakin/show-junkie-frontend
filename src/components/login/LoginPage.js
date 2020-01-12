import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../containers/forms/Login';
import '../../stylesheets/forms/login.scss';

const LoginPage = (props) => {
  
  return (
    <div className="column">
      <Login />
    </div>
  );
};

export default LoginPage;