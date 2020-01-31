import { connect } from 'react-redux';
import { getShows } from '../../actions/show';
import { fetchFavList } from '../../actions/favourites';
import ShowList from '../../components/shows/ShowList';


const mapStateToProps = state => ({
  country: state.filterReducer.currentCountry,
  date: state.filterReducer.currentDate,
  shows: state.showReducer.todaysShows,
  fetchedShows: state.showReducer.fetchedShows,
  authToken: state.authenticationReducer.authToken,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: (country, date) => dispatch(getShows(country, date)),
  fetchFavList: authToken => dispatch(fetchFavList(authToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
