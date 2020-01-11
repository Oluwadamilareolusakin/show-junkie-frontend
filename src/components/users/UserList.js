import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UserList = (props) => {
  const { users } = props;
  return (
    users.map(user => <User user={user} />)
  )
}

UserList.defaultProps = {
  users: {},
}

UserList.propTypes = {
  users: PropTypes.arrayOf(oneOfType(Object)),
}