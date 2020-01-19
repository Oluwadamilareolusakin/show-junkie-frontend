const TV_MAZE_URL = 'https://api.tvmaze.com';

const RECIEVE_EPISODES = 'RECIEVE_EPISODES';
const RECIEVE_SHOWS = 'RECIEVE_SHOWS';
const RECIEVE_SEASONS = 'RECIEVE_SEASONS';
const RECIEVE_SHOW = 'RECIEVE_SHOW';
const STORE_SHOW_ID = 'STORE_SHOW_ID';

const recieveShows = shows => ({
  type: RECIEVE_SHOWS,
  shows,
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
    const shows = await fetch(`${TV_MAZE_URL}/schedule?country=${country}&date=${date}`);
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
  const seasonsData = await fetch(`${TV_MAZE_URL}/shows/${id}/seasons`);
  const seasons = await seasonsData.json();
  dispatch(recieveSeasons(seasons));
};

export const fetchEpisodes = id => async (dispatch) => {
  const episodesData = await fetch(`${TV_MAZE_URL}/shows/${id}/episodes`);
  const episodes = await episodesData.json();
  dispatch(recieveEpisodes(episodes));
};

export const getShow = showId => async (dispatch) => {
  try {
    const show = await fetch(`${TV_MAZE_URL}/shows/${showId}`);
    const data = await show.json();
    dispatch(recieveShow(data));
  } catch (error) {
    // handle errors
  }
};
