import { connect } from 'react-redux';
import Loading from '../../components/interactions/Loading';

const mapStateToProps = state => ({
  loading: state.sharedReducer.loading,
  loadingAction: state.sharedReducer,
});

export default connect(mapStateToProps)(Loading);
