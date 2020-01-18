const AUTHENTICATE = "AUTHENTICATE";
const LOGOUT = 'LOGOUT';

const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      return { loggedIn: true, authToken: action.authToken };
    }

    case LOGOUT: {
      console.log('logout g')
      return { loggedIn: false };
    }

    default: {
      return state;
    }
  }
};

export default authenticationReducer;
