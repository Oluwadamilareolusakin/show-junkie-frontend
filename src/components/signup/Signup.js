import React from 'react';
import PropTypes from 'prop-types';
import SessionForm from '../forms/SessionForm';


const SignUpForm = (props) => {
  const { handleSubmit } = props;
  return (
    <SessionForm
      handleSubmit={handleSubmit}
      buttonName="Sign up"
      signUp
      actionPath="/login"
      actionButtonName="Login"
      formName="Sign Up"
    />
  );
};

SignUpForm.defaultProps = {
  handleSubmit: () => {},
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default SignUpForm;
