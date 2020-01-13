import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/modals/modal.scss';


class Feedback extends React.Component {
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

  modal = () => document.querySelector('.feedback-modal');

  render() {
    const { closeModal } = this.props;
    return (
      <div className="feedback-modal modal column">
        <div className="close" onClick={() => closeModal(this.modal())}></div>
        <form className="column">
          <textarea rows = "12" type="text" onChange={this.handleChange} placeholder="Leave us a message or a suggestion"/>
          <button type="buttons" onClick={this.handleSubmit}>LEAVE FEEDBACK</button>
        </form>
      </div>
    );
  }
};

export default Feedback;