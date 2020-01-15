const SIGN_UP = 'SIGN_UP';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const signUp = (email, userName, password, id) => ({
  type: SIGN_UP,
  id,
  userName,
});

export const login = (email, password, id, userName) => ({
  type: LOGIN,
  id,
  userName,
});

export const logout = () => ({
  type: LOGOUT,
});
