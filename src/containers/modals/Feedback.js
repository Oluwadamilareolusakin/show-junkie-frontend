import { connect } from 'react-redux';
import Feedback from '../../components/modals/Feedback';
import { createSuggestion } from '../../actions/suggestions';
import { resetCreated } from '../../actions/shared';

const mapStateToProps = state => ({
  created: state.sharedReducer.created,
});

const mapDispatchToProps = dispatch => ({
  resetCreated: () => dispatch(resetCreated()),
  submitSuggestion: (message, user_id = 1) => dispatch(createSuggestion(message, user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);