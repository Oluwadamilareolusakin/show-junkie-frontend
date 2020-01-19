import { connect } from 'react-redux';
import { fetchFavourites, fetchFavList } from '../../actions/favourites';
import FavouriteList from '../../components/shows/FavouriteList';

const mapStateToProps = state => ({
  favList: state.favouritesReducer.favList, 
  favourites: state.favouritesReducer.favourites, 
  fetchedFavourites: state.favouritesReducer.fetchedFavourites,
  authToken: state.authenticationReducer.authToken,
});

const mapDispatchToProps = dispatch => ({
  fetchFavourites: favList => dispatch(fetchFavourites(favList)),
  fetchFavList: authToken => dispatch(fetchFavList(authToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteList);