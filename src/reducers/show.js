const RECIEVE_EPISODES = 'RECIEVE_EPISODES';
const STORE_SHOW_ID = 'STORE_SHOW_ID';
const RECIEVE_SHOW = 'RECIEVE_SHOW';
const RECIEVE_SHOWS = 'RECIEVE_SHOWS';
const RECIEVE_SEASONS = 'RECIEVE_SEASONS';

const showReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_SHOWS: {
      return { ...state, todaysShows: action.shows, fetchedShows: true };
    }

    case RECIEVE_SHOW: {
      return { ...state, currentShow: action.show, fetchedShow: true };
    }

    case RECIEVE_EPISODES: {
      return { ...state, episodes: action.episodes, fetchedEpisodes: true };
    }

    case RECIEVE_SEASONS: {
      return { ...state, seasons: action.seasons, fetchedSeasons: true };
    }

    case STORE_SHOW_ID: {
      return { ...state, showId: action.showId };
    }

    default:
      return state;
  }
};

export default showReducer;
