import { connect } from 'react-redux';
import { favourite } from '../../actions/show';
import FavouriteButton from '../../components/shows/FavouriteButton';

const mapStateToProps = state => ({
  favourites: state.showReducer.favourites,
  showId: state.showReducer.showId,
});

const mapDispatchToProps = dispatch => ({
  favourite: (id) => dispatch(favourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteButton);