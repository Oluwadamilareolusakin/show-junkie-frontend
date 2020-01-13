import { connect } from 'react-redux';
import EpisodeList from '../../components/shows/EpisodeList';
import { fetchEpisodes } from '../../actions/show';

const mapStateToProps = state => ({
  showId: state.showReducer.showId,
  episodes: state.showReducer.episodes,
  fetchedEpisodes: state.showReducer.fetchedEpisodes,
});

const mapDispatchToProps = dispatch => ({
  fetchEpisodes: (showId) => dispatch(fetchEpisodes(showId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeList);