import { connect } from 'react-redux';
import Signup from '../../components/signup/Signup';
import { signup } from '../../actions/authentication';

const mapDispatchToProps = dispatch => ({
  handleSubmit: formData => dispatch(signup(formData)),
});

export default connect(null, mapDispatchToProps)(Signup);
