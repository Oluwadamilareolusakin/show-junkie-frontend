import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../stylesheets/sessions/sessions.scss';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
    }
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    if (e.target.id === "name") {
      console.log(e.target.value)
      this.setState({
        name: e.target.value,
      })
    }

    if (e.target.id === "email") {
      console.log(e.target.value)

      this.setState({
        email: e.target.value,
      })
    }

    if (e.target.id === "password") {
      console.log(e.target.value)

      this.setState({
        password: e.target.value,
      })
    }
  }

  submitForm() {
    const { handleSubmit } = this.props;
    const { name, email, password } = this.state;
    const formData = new FormData();
    formData.set('email', email);
    formData.set('password', password);
    if (name) {
      formData.set('name', name);
    }
    handleSubmit(formData)
  };

  render() {
    const {
      signUp, buttonName,
      formName, actionPath, actionButtonName,
    } = this.props;
    return (
      <div className="session-form-holder column">
        <h2>{formName}</h2>
        <form>
          { signUp && <input type="text" id="name" placeholder="Full Name" className="text-input" onChange={this.handleChange}/> }
          <input type="text" id="email" placeholder="Email Address" className="text-input" onChange={this.handleChange}/>
          <input type="text" id="password" placeholder="Password" className="text-input" onChange={this.handleChange}/>
          <button type="button" className="btn session-btn" onClick={() => this.submitForm()}>
            {buttonName}
          </button>
          <Link to={actionPath} className="action">
            <button type="button" className="action-btn">{actionButtonName}</button>
          </Link>
        </form>
      </div>
    );
  }
};

SessionForm.defaultProps = {
  handleSubmit: () => {},
  signUp: false,
  buttonName: 'Login',
  actionButtonName: 'Sign up',
  actionPath: '/signup',
  formName: 'Login',
};

SessionForm.propTypes = {
  handleSubmit: PropTypes.func,
  signUp: PropTypes.bool,
  buttonName: PropTypes.string,
  actionButtonName: PropTypes.string,
  actionPath: PropTypes.string,
  formName: PropTypes.string,
};

export default SessionForm;
