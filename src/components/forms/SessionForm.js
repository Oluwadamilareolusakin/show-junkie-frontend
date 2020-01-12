import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../stylesheets/sessions/sessions.scss';

const SessionForm = (props) => {
  const { handleSubmit, signUp, buttonName, 
          formName, actionPath, actionButtonName
        } = props;

  const submitForm = () => {
    let name = document.querySelector('#name');
    // name will only exist in the signup form so its necessary to check
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
    <div className="session-form-holder column">
      <h2>{formName}</h2>
      <form>
        { signUp && <input type="text" id="name" placeholder="Full Name" className="text-input" /> }
        <input type="text" id="email" placeholder="Email Address" className="text-input" />
        <input type="text" id="password" placeholder="Password" className="text-input" />
        <button type="button" className="btn session-btn" onClick={() => submitForm()}>
          {buttonName}
        </button>
        <Link to={actionPath} className="action">
          <button className="action-btn">{actionButtonName}</button>
        </Link>
      </form>
    </div>
  )
}

SessionForm.defaultProps = {
  handleSubmit: () => {},
  signUp: false,
  buttonName: "Login",
  actionButtonName: "Sign up",
  actionPath: "/signup",
  formName: "Login",
}

SessionForm.propTypes = {
  handleSubmit: PropTypes.func,
  signUp: PropTypes.bool,
  buttonName: PropTypes.string,
  actionButtonName: PropTypes.string,
  actionPath: PropTypes.string,
  formName: PropTypes.string,
}

export default SessionForm;
