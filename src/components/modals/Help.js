import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/modals/modal.scss';

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      question: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.id === "email") {
      this.setState({
        email: e.target.value,
      })
      return;
    }

    this.setState({
      question: e.target.value,
    })
  }

  handleSubmit() {

  }

  modal = () => document.querySelector('.help-modal');

  render() {
    const { closeModal } = this.props; 
    return (
      <div className="help-modal modal column">
        <div className="close" onClick={() => closeModal(this.modal())}></div>
        <form className="column">
          <input type="text" onChange={this.handleChange} placeholder="Email Address"/>
          <textarea type="text" rows="12" onChange={this.handleChange} placeholder="Ask us anything...."/>
          <button type="buttons" onClick={this.handleSubmit}>SEND</button>
        </form>
      </div>
    );
  }
};

export default Help;