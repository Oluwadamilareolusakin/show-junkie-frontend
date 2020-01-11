import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../forms/Signup';

const SignupPage = (props) => {
  
  return (
    <>
      <Signup />
      <Link to="/login">
        <button>Login</button>
      </Link>
    </>
  );
};

export default SignupPage;