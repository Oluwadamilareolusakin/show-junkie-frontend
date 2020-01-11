const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const signUp = ({ email, name, password }) => {
  return {
    type: SIGN_UP,
    id,
    name,
  };
};

export const login = ({email, password}) => {
  return {
    type: LOGIN,
    id,
    name
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
