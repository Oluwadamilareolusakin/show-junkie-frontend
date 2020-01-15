import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/modals/confirmation.scss';

const ConfirmataionModal = (props) => {
  const { handleClick, type } = props; 
  return (
    <div className="created">
      <h2>Your {type} was successully sent</h2>
      <button type="button" onClick={(event) => handleClick(event)}>Ok!</button>
    </div>
  );
};

ConfirmataionModal.defaultProps = {
  type: '',
  handleClick: () => {},
}

ConfirmataionModal.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
}

export default ConfirmataionModal;