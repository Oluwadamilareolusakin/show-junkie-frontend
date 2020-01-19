import { connect } from 'react-redux';
import { favourite, unfavourite, fetchFavList } from '../../actions/favourites';
import FavouriteButton from '../../components/shows/FavouriteButton';

const mapStateToProps = state => ({
  favList: state.favouritesReducer.favList,
  showId: state.showReducer.showId,
  authToken: state.authenticationReducer.authToken,
});

const mapDispatchToProps = dispatch => ({
  favourite: (id, authToken) => dispatch(favourite(id, authToken)),
  fetchFavList: authToken => dispatch(fetchFavList(authToken)),
  unfavourite: (showId, favouriteId, authToken) => dispatch(unfavourite(showId,
    favouriteId, authToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteButton);
