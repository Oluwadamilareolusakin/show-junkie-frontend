const SIGN_UP = 'SIGN_UP';
const LOGIN = 'SIGN_IN';
const LOGOUT = 'LOGOUT';

const sessionReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case LOGOUT: {
      return { loggedIn: false };
    }

    case LOGIN: {
      return { ...state, loggedIn: action.loggedIn, current_user: action.user };
    }

    case SIGN_UP: {
      return { ...state, loggedIn: action.loggedIn, current_user: action.user };
    }


    default:
      return state;
  }
};

export default sessionReducer;
