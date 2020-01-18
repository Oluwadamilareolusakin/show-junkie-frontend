import { connect } from 'react-redux';
import NavBar from '../../components/navigations/NavBar';
import { signout } from '../../actions/authentication';

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
});

export default connect(null, mapDispatchToProps)(NavBar);
