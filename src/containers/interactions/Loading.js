import Loading from '../../components/interactions/Loading';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loading: state.sharedReducer.loading,
  loadingAction: state.sharedReducer,
});

export default connect(mapStateToProps)(Loading);