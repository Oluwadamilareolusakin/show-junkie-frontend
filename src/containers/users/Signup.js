import { connect } from 'react-redux';
import SignupForm from '../../components/signup/Signup';
import { signup } from '../../actions/users';

const mapDispatchToProps = dispatch => ({
  handleSubmit: (formData) => dispatch(signup(formData)),
});

export default connect(null, mapDispatchToProps)(SignupForm);