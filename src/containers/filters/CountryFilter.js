import { connect } from 'react-redux';
import updateCurrentCountry from '../../actions/filter';
import { getShows } from '../../actions/show';
import CountryFilter from '../../components/filters/CountryFilter';


const mapStateToProps = state => ({
  currentCountry: state.filterReducer.currentCountry,
  date: state.filterReducer.currentDate,
});

const mapDispatchToProps = dispatch => ({
  setCurrentCountry: country => dispatch(updateCurrentCountry(country)),
  fetchShows: (country, date) => dispatch(getShows(country, date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryFilter);
