import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

const User = (props) => {
  const { user } = props;
  const { name } = user;
  return (
    <p className="user-name">{name}</p>
  );
};

User.defaultProps = {
  user: {},
}

User.propTypes = {
  user: PropTypes.arrayOf(oneOfType(['strings'])),
}

export default User;
