import { connect } from 'react-redux';
import { getShows } from '../../actions/show';
import ShowList from '../../components/shows/ShowList';


const mapStateToProps = state => ({
  country: state.filterReducer.currentCountry,
  date: state.filterReducer.currentDate,
  shows: state.showReducer.todaysShows,
  fetchedShows: state.showReducer.fetchedShows,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: (country, date) => dispatch(getShows(country, date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);