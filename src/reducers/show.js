const RECIEVE_SHOWS = "RECIEVE_SHOWS";
const RECIEVE_SHOW = "RECIEVE_SHOW";
const RECIEVE_SEASONS = "RECIEVE_SEASONS";
const STORE_SHOW_ID = "STORE_SHOW_ID";
const RECIEVE_EPISODES = "RECIEVE_EPISODES";

const showReducer = (state = {}, action) => {
  switch (action.type) {

    case RECIEVE_SHOWS: {
      return Object.assign({}, state, {todaysShows: action.shows, fetchedShows: true});
    }
    
    case RECIEVE_SHOW: {
      return Object.assign({}, state, {currentShow: action.show, fetchedShow: true});
    }

    case RECIEVE_EPISODES: {
      return Object.assign({}, state, {episodes: action.episodes, fetchedEpisodes: true});
    }

    case RECIEVE_SEASONS: {
      console.log(action.seasons)
      return Object.assign({}, state, {seasons: action.seasons, fetchedSeasons: true});
    }

    case STORE_SHOW_ID: {
      return Object.assign({}, state, {showId: action.showId});      
    }

    default:
      return state;
  };
};

export default showReducer;