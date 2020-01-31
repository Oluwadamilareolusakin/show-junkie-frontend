import { connect } from 'react-redux';
import SideBar from '../../components/navigations/SideBar';
import { signout } from '../../actions/authentication';

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
});

export default connect(null, mapDispatchToProps)(SideBar);
