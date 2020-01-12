const SIGN_UP = "SIGN_UP";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const signUp = (email, userName, password, id ) => {
  return {
    type: SIGN_UP,
    id,
    userName,
  };
};

export const login = (email, password, id, userName) => {
  return {
    type: LOGIN,
    id,
    userName
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
