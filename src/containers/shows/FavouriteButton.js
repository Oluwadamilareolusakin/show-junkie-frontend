import { connect } from 'react-redux';
import { favourite, unfavourite } from '../../actions/show';
import FavouriteButton from '../../components/shows/FavouriteButton';

const mapStateToProps = state => ({
  favourites: state.showReducer.favourites,
  showId: state.showReducer.showId,
  authToken: state.authenticationReducer.authToken,
});

const mapDispatchToProps = dispatch => ({
  favourite: (id, authToken) => dispatch(favourite(id, authToken)),
  unfavourite: (showId, favouriteId, authToken) => dispatch(unfavourite(showId,
    favouriteId, authToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteButton);
