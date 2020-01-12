import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../../containers/forms/Signup';
import '../../stylesheets/forms/login.scss';

const SignupPage = () => {
  
  return (
    <div className="column">
      <Signup />
    </div>
  );
};

export default SignupPage;