import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationModal from './Confirmation';
import '../../stylesheets/modals/modal.scss';

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.modal = this.modal.bind(this);
  }

  handleChange(e) {
    if (e.target.id === 'email') {
      this.setState({
        email: e.target.value,
      });
      return;
    }

    this.setState({
      message: e.target.value,
    });
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

  modal() { return document.querySelector('.help-modal'); }

  render() {
    const { closeModal, created } = this.props;
    return (
      <div className="help-modal modal column">
        <div className="close" onClick={() => closeModal(this.modal())} />
        {!created && (
        <form className="column">
          <textarea type="text" rows="12" onChange={this.handleChange} placeholder="Ask us anything...." />
          <button type="buttons" onClick={(event) => this.handleSubmit(event)}>SEND</button>
        </form>
        )}

        {
          created
          && <ConfirmationModal handleClick={this.handleOk} type="Enquiry" />
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
