import { connect } from 'react-redux';
import { getShow } from '../../actions/show';
import Show from '../../components/shows/Show';

const mapStateToProps = (state) => ({
  showId: state.showReducer.showId,
  show: state.showReducer.currentShow,
  fetchedShow: state.showReducer.fetchedShow,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShow: (id) => dispatch(getShow(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Show);
