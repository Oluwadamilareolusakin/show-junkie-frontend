import { connect } from 'react-redux';
import LoginForm from '../../components/login/Login';
import { login } from '../../actions/users';

const mapDispatchToProps = dispatch => ({
  handleSubmit: (formData) => dispatch(login(formData)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
