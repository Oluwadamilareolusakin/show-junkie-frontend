import React from 'react';
import PropTypes from 'prop-types';
import SessionForm from './SessionForm';


const SignUpForm = (props) => {
  const { handleSubmit } = props;
  return (
    <SessionForm handleSubmit={handleSubmit} buttonName="Sign Up" signUp/>
  );
};

SignUpForm.defaultProps = {
  handleSubmit: () => {},
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
}

export default SignUpForm;
