const GET_EPISODES = "GET_EPISODES";
const RECIEVE_SHOWS = "RECIEVE_SHOWS";
const RECIEVE_SHOW = "RECIEVE_SHOW";
const STORE_SHOW_ID = "STORE_SHOW_ID";

export const getEpisodes = (id) => {
  return {
    type: GET_EPISODES,
  };
};

export const getShows = (country, date) => {
  return async(dispatch) => {
    try {
      const shows = await fetch(`http://api.tvmaze.com/schedule?country=${country}&date=${date}`);
      const response = await shows.json();
      dispatch(recieveShows(response));
    } catch {
      //handle errors
      return "There was a problem retrieving your show :'(";
    }
  };
};

const recieveShows = (shows) => {
  return {
    type: RECIEVE_SHOWS,
    shows,
  };
};

export const getShow = (showId) => {
  return async(dispatch) => {
    try{
      const show = await fetch(`http://api.tvmaze.com/shows/${showId}`);
      const data = await show.json();
      dispatch(recieveShow(data));
    } catch (error) {
      // handle errors
      return "There was a problem retrieving your show :'(";
    };
  }
};

const recieveShow = (show) => {
  return {
    type: RECIEVE_SHOW,
    show,
  };
};

export const storeShowId = (showId) => {
  return {
    type: STORE_SHOW_ID,
    showId,
  };
};
