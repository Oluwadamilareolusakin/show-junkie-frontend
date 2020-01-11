import { connect } from 'reac';
import Signup from '../components/forms/Signup';
import signUp from '../actions/session';

const mapDispatchToProps = dispatch => ({
  handleSubmit: (email, name, password) => dispatch(signUp(email, name, password)),
}); 

export default connect(null, mapDispatchToProps)(Signup);