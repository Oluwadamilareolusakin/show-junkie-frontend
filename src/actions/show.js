import Axios from 'axios';

const API_BASE_URL = 'https://api-showjunkie.herokuapp.com';

const RECIEVE_EPISODES = 'RECIEVE_EPISODES';
const RECIEVE_SHOWS = 'RECIEVE_SHOWS';
const RECIEVE_SEASONS = 'RECIEVE_SEASONS';
const RECIEVE_SHOW = 'RECIEVE_SHOW';
const RECIEVE_FAV_LIST = 'RECIEVE_FAV_LIST';
const STORE_SHOW_ID = 'STORE_SHOW_ID';

const recieveShows = shows => ({
  type: RECIEVE_SHOWS,
  shows,
});

const recieveFavList = list => ({
  type: RECIEVE_FAV_LIST,
  list,
});

const recieveSeasons = seasons => ({
  type: RECIEVE_SEASONS,
  seasons,
});

const recieveEpisodes = episodes => ({
  type: RECIEVE_EPISODES,
  episodes,
});


export const getShows = (country, date) => async (dispatch) => {
  try {
    const shows = await fetch(`https://api.tvmaze.com/schedule?country=${country}&date=${date}`);
    const response = await shows.json();
    dispatch(recieveShows(response));
  } catch (error) {
    // handle errors
  }
};

const recieveShow = show => ({
  type: RECIEVE_SHOW,
  show,
});

export const storeShowId = showId => ({
  type: STORE_SHOW_ID,
  showId,
});

export const fetchSeasons = id => async (dispatch) => {
  const seasonsData = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`);
  const seasons = await seasonsData.json();
  dispatch(recieveSeasons(seasons));
};

export const fetchEpisodes = id => async (dispatch) => {
  const episodesData = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const episodes = await episodesData.json();
  dispatch(recieveEpisodes(episodes));
};

export const getShow = showId => async (dispatch) => {
  try {
    const show = await fetch(`https://api.tvmaze.com/shows/${showId}`);
    const data = await show.json();
    dispatch(recieveShow(data));
  } catch (error) {
    // handle errors
  }
};

export const fetchFavList = authToken => async (dispatch) => {
  const request = await Axios.get(`${API_BASE_URL}/favourites`,
    { headers: { Authorization: authToken } });
  const favourites = {};
  request.data.forEach((favourite) => { favourites[favourite.show_id] = favourite.id });
  dispatch(recieveFavList(favourites));
};

export const favourite = (showId, authToken) => async (dispatch) => {
  await Axios.post(
    `${API_BASE_URL}/favourites`, { show_id: showId }, {
      headers: {
        Authorization: authToken,
        'Content-Type': 'application/json',
      },
    },
  );
  dispatch(fetchFavList(authToken));
};

export const unfavourite = (favouriteId, authToken) => async (dispatch) => {
  await Axios.delete(
    `${API_BASE_URL}/favourites/${favouriteId}`, {
      headers: {
        Authorization: authToken,
        'Content-Type': 'application/json',
      },
    },
  );
  dispatch(fetchFavList(authToken));
};
