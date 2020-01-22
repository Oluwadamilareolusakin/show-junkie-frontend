const AUTHENTICATE = 'AUTHENTICATE';
const LOGOUT = 'LOGOUT';

const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      return { 
        loggedIn: true, 
        authToken: action.authToken, 
        userId: action.user.id, 
        username: action.user.name 
      };
    }

    case LOGOUT: {
      return { loggedIn: false };
    }

    default: {
      return state;
    }
  }
};

export default authenticationReducer;
