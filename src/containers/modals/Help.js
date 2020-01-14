import { connect } from 'react-redux';
import Help from '../../components/modals/Help';
import { createEnquiry } from '../../actions/enquiries';

const mapDispatchToProps = dispatch => ({
  submitEnquiry: (enquiry, user_id = 1) => dispatch(createEnquiry(enquiry, user_id)),
});

const mapStateToProps = state => ({
  created: state.enquiriesReducer.createdEnquiry,
});

export default connect(mapStateToProps, mapDispatchToProps)(Help);
