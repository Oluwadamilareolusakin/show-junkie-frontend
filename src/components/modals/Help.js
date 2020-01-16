import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationModal from './Confirmation';

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modal = () => document.querySelector('.help-modal');
  }

  handleChange(e) {
    if (e.target.id === 'message') {
      this.setState({
        message: e.target.value,
      });
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
    const { submitEnquiry } = this.props;
    submitEnquiry(message);
  }


  render() {
    const { closeModal, created } = this.props;
    return (
      <div className="help-modal modal column">
        <button type="button" className="no-bg-btn" onClick={() => closeModal(this.modal())}>
          <div className="close" />
        </button>
        {!created && (
        <form className="column">
          <textarea type="text" id="message" rows="12" onChange={this.handleChange} placeholder="Ask us anything...." />
          <button type="button" onClick={(event) => this.handleSubmit(event)}>SEND</button>
        </form>
        )}

        {
          created
          && <ConfirmationModal handleClick={this.handleOk} type="enquiry" />
        }
      </div>
    );
  }
}

Help.defaultProps = {
  created: false,
  resetCreated: () => {},
  submitEnquiry: () => {},
  closeModal: () => {},
};

Help.propTypes = {
  created: PropTypes.bool,
  resetCreated: PropTypes.func,
  submitEnquiry: PropTypes.func,
  closeModal: PropTypes.func,
};

export default Help;
