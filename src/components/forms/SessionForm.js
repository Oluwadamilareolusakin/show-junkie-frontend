import React from 'react';
import PropTypes from 'prop-types';

const SessionForm = (props) => {
  const { handleSubmit, signUp, buttonName } = props;

  const submitForm = () => {
    let name = document.querySelector('#name');
    if (name) name = name.value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (signUp) {
      handleSubmit(email, name, password);
    } else {
      handleSubmit(email, password);
    };
  };

  return (
    <form>
      { signUp && <input type="text" id="name" placeholder="Full Name" class="text-input" /> }
      <input type="text" id="email" placeholder="Email Address" class="text-input" />
      <input type="text" id="password" placeholder="Password" class="text-input" />
      <button type="button" className="btn session-btn" onClick={() => submitForm()}>
        {buttonName}
      </button>
    </form>
  )
}

SessionForm.defaultProps = {
  handleSubmit: () => {},
  signUp: false,
  buttonName: "Login",
}

SessionForm.propTypes = {
  handleSubmit: PropTypes.func,
  signUp: PropTypes.bool,
  buttonName: PropTypes.string,
}

export default SessionForm;
