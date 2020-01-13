import { connect } from 'react-redux';
import SeasonList from '../../components/shows/SeasonList';
import { fetchSeasons } from '../../actions/show';

const mapStateToProps = state => ({
  showId: state.showReducer.showId,
  seasons: state.showReducer.seasons,
  fetchedSeasons: state.showReducer.fetchedSeasons,
});

const mapDispatchToProps = dispatch => ({
  fetchSeasons: (showId) => dispatch(fetchSeasons(showId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SeasonList);