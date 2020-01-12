const RECIEVE_SHOWS = "RECIEVE_SHOWS";
const RECIEVE_SHOW = "RECIEVE_SHOW";
const STORE_SHOW_ID = "STORE_SHOW_ID";



const showReducer = (state = {}, action) => {
  switch (action.type) {

    case RECIEVE_SHOWS: {
      return Object.assign({}, state, {todaysShows: action.shows, fetchedShows: true});
    }
    
    case RECIEVE_SHOW: {
      return Object.assign({}, state, {currentShow: action.show, fetchedShow: true});
    }

    case STORE_SHOW_ID: {
      return Object.assign({}, state, {showId: action.showId});      
    }

    default:
      return state;
  };
};

export default showReducer;