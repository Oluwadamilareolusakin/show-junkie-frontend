import { connect } from 'react-redux';
import Help from '../../components/modals/Help';
import { createEnquiry } from '../../actions/enquiries';

const mapDispatchToProps = dispatch => ({
  submitEnquiry: (enquiry, authToken) => dispatch(createEnquiry(enquiry, authToken)),
});

const mapStateToProps = state => ({
  created: state.sharedReducer.created,
  authToken: state.authenticationReducer.authToken,
});

export default connect(mapStateToProps, mapDispatchToProps)(Help);
