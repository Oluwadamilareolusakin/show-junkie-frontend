const SIGN_UP = "SIGN_UP";
const LOGIN = "SIGN_IN";
const LOGOUT = "LOGOUT";

const sessionReducer = (state = {loggedIn: false}, action) => {
  switch (action.type) {
    case LOGOUT: {
      return {loggedIn: false}
    }

    case LOGIN: {
      return Object.assign({}, state, {loggedIn:true, current_user: action.user});
    }

    default:
      return state;
  };
};

export default sessionReducer;