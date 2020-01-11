import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../forms/Login';

const LoginPage = (props) => {
  const { loginButton } = props;
  
  return (
    <>
      <Login />
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </>
  );
};

export default LoginPage;