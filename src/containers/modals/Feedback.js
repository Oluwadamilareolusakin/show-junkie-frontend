import { connect } from 'react-redux';
import Feedback from '../../components/modals/Feedback';
import { createSuggestion } from '../../actions/suggestions';
import { resetCreated } from '../../actions/shared';

const mapStateToProps = state => ({
  created: state.sharedReducer.created,
  authToken: state.authenticationReducer.authToken,
  userId: state.authenticationReducer.userId,
});

const mapDispatchToProps = dispatch => ({
  resetCreated: () => dispatch(resetCreated()),
  submitSuggestion: (message, authToken, userId) => dispatch(
    createSuggestion(message, authToken, userId)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
