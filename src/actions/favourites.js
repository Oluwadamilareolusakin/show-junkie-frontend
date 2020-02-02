import Axios from 'axios';
import { loading, finished } from './shared';

const API_BASE_URL = 'https://api-showjunkie.herokuapp.com';
const TV_MAZE_URL = 'https://api.tvmaze.com';


const RECIEVE_FAV_LIST = 'RECIEVE_FAV_LIST';
const RECIEVE_FAVOURITES = 'RECIEVE_FAVOURITES';

const recieveFavList = list => ({
  type: RECIEVE_FAV_LIST,
  list,
});

const recieveFavourites = favourites => ({
  type: RECIEVE_FAVOURITES,
  favourites,
});


export const fetchFavList = authToken => async (dispatch) => {
  const request = await Axios.get(`${API_BASE_URL}/favourites`,
    { headers: { Authorization: authToken } });
  const favourites = {};
  request.data.forEach((favourite) => { favourites[favourite.show_id] = favourite.id; });
  dispatch(recieveFavList(favourites));
};

export const favourite = (showId, authToken) => async (dispatch) => {
  dispatch(loading('Adding show to your favourites'));
  await Axios.post(
    `${API_BASE_URL}/favourites`, { show_id: showId }, {
      headers: {
        Authorization: authToken,
        'Content-Type': 'application/json',
      },
    },
  );
  dispatch(fetchFavList(authToken));
  setTimeout(() => {
    dispatch(finished());
  }, 1000);
};

export const unfavourite = (favouriteId, authToken) => async (dispatch) => {
  dispatch(loading('Unsubscribing'));
  await Axios.delete(
    `${API_BASE_URL}/favourites/${favouriteId}`, {
      headers: {
        Authorization: authToken,
        'Content-Type': 'application/json',
      },
    },
  );
  dispatch(fetchFavList(authToken));
  setTimeout(() => {
    dispatch(finished());
  }, 1000);
};

export const fetchFavourites = favList => (dispatch) => {
  dispatch(loading('Loading your favourite shows'));
  const favourites = [];
  Object.keys(favList).forEach(async (key) => {
    const show = await fetch(`${TV_MAZE_URL}/shows/${key}`);
    const data = await show.json();
    favourites.push(data);
  });
  dispatch(recieveFavourites(favourites));
  setTimeout(() => {
    dispatch(finished());
  }, 1000);
};
