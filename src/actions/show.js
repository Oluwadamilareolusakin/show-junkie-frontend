const RECIEVE_EPISODES = 'RECIEVE_EPISODES';
const RECIEVE_SHOWS = 'RECIEVE_SHOWS';
const RECIEVE_SEASONS = 'RECIEVE_SEASONS';
const RECIEVE_SHOW = 'RECIEVE_SHOW';
const STORE_SHOW_ID = 'STORE_SHOW_ID';

export const fetchEpisodes = (id) => async (dispatch) => {
  const episodesData = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const episodes = await episodesData.json();
  dispatch(recieveEpisodes(episodes));
};

const recieveEpisodes = (episodes) => ({
  type: RECIEVE_EPISODES,
  episodes,
});


export const fetchSeasons = (id) => async (dispatch) => {
  const seasonsData = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`);
  const seasons = await seasonsData.json();
  console.log('seasons');
  dispatch(recieveSeasons(seasons));
};

const recieveSeasons = (seasons) => ({
  type: RECIEVE_SEASONS,
  seasons,
});

export const getShows = (country, date) => async (dispatch) => {
  try {
    const shows = await fetch(`https://api.tvmaze.com/schedule?country=${country}&date=${date}`);
    const response = await shows.json();
    dispatch(recieveShows(response));
  } catch (error) {
    // handle errors
    return "There was a problem retrieving your show :'(";
  }
};

const recieveShows = (shows) => ({
  type: RECIEVE_SHOWS,
  shows,
});

export const getShow = (showId) => async (dispatch) => {
  try {
    const show = await fetch(`https://api.tvmaze.com/shows/${showId}`);
    const data = await show.json();
    dispatch(recieveShow(data));
  } catch (error) {
    // handle errors
    return "There was a problem retrieving your show :'(";
  }
};

const recieveShow = (show) => ({
  type: RECIEVE_SHOW,
  show,
});

export const storeShowId = (showId) => ({
  type: STORE_SHOW_ID,
  showId,
});
