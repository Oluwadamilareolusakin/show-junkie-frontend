import { connect } from 'react-redux';
import ShowCard from '../../components/shows/ShowCard';
import { storeShowId } from '../../actions/show';

const mapDispatchToProps = dispatch => ({
  storeId: id => dispatch(storeShowId(id)),
});


export default connect(null, mapDispatchToProps)(ShowCard);
