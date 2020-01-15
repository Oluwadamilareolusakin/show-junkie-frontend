import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationModal from '../../components/modals/Confirmation';
import '../../stylesheets/modals/modal.scss';


class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modal = this.modal.bind(this);
  }

  handleChange(e) {
    if (e.target.id === "message") {
      this.setState({
        message: e.target.value,
      })
      return;
    }
  }

  handleOk(e) {
    const { closeModal, resetCreated } = this.props;
    e.preventDefault();
    closeModal(this.modal());
    resetCreated();
  }

  handleSubmit(event) {
    event.preventDefault();
    const { message } = this.state;
    const { submitSuggestion } = this.props;
    submitSuggestion(message);
  }

  modal = () => document.querySelector('.feedback-modal');

  render() {
    const { closeModal, created } = this.props;
    return (
      <div className="feedback-modal modal column">
        <div className="close" onClick={() => closeModal(this.modal())}></div>
        {!created && <form className="column">
          <textarea rows = "12" id="message" type="text" onChange={this.handleChange} placeholder="Leave us a message or a suggestion"/>
          <button type="buttons" onClick={(event) => this.handleSubmit(event)}>SEND FEEDBACK</button>
        </form>}
        {
          created && 
          <ConfirmationModal handleClick={this.handleOk} type="Feedback"/>
        }
      </div>
    );
  }
};

Feedback.defaultProps = {
  created: false,
  resetCreated: () => {},
  submitSuggestion: () => {},
}

Feedback.propTypes = {
  created: PropTypes.bool,
  resetCreated: PropTypes.func,
  submitSuggestion: PropTypes.func,
}

export default Feedback;