import { connect } from 'react-redux';
import { login } from '../../actions/authentication';
import Login from '../../components/login/Login';

const mapDispatchToProps = dispatch => ({
  handleSubmit: (formData) => dispatch(login(formData)),
});

export default connect(null, mapDispatchToProps)(Login);
