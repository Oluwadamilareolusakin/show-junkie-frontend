import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/modals/modal.scss';

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
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
      message: e.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { message } = this.state;
    const { submitEnquiry } = this.props;
    submitEnquiry(message);
  }

  modal = () => document.querySelector('.help-modal');

  render() {
    const { closeModal } = this.props; 
    return (
      <div className="help-modal modal column">
        <div className="close" onClick={() => closeModal(this.modal())}></div>
        <form className="column">
          <textarea type="text" rows="12" onChange={this.handleChange} placeholder="Ask us anything...."/>
          <button type="buttons" onClick={(event) => this.handleSubmit(event)}>SEND</button>
        </form>
      </div>
    );
  }
};

Help.defaultProps = {
  created: false,
  submitEnquiry: () => {},
}

Help.propTypes = {
  created: PropTypes.bool,
  submitEnquiry: PropTypes.func,
}

export default Help;