const RECIEVE_FAV_LIST = 'RECIEVE_FAV_LIST';
const RECIEVE_FAVOURITES = 'RECIEVE_FAVOURITES';

const favouritesReducer = (state ={}, action) => {
  switch (action.type) {
    case RECIEVE_FAV_LIST: {
      return { ...state, favList: action.list };
    }
    
    case RECIEVE_FAVOURITES: {
      return { ...state, favourites: action.favourites, fetchedFavourites: true };
    }

    default:
      return state;
  }
};

export default favouritesReducer;