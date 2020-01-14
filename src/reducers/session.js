const SIGN_UP = "SIGN_UP";
const LOGIN = "SIGN_IN";
const LOGOUT = "LOGOUT";

const sessionReducer = (state = {loggedIn: false}, action) => {
  switch (action.type) {
    case LOGOUT: {
      return {loggedIn: false}
    }

    case LOGIN: {
      return Object.assign({}, state, {loggedIn: action.loggedIn, current_user: action.user});
    }

    case SIGN_UP: {
      return Object.assign({},state, {loggedIn: action.loggedIn, current_user: action.user })
    }
      

    default:
      return state;
  }
};

export default sessionReducer;