import React from 'react';
import PropTypes from 'prop-types';
import SessionForm from './SessionForm';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <SessionForm handleSubmit={handleSubmit}/>
  )
}

LoginForm.defaultProps = {
  handleSubmit: () => {},
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
}

export default LoginForm;
