import Axios from 'axios';

const AUTHENTICATE = 'AUTHENTICATE';
const LOGOUT = 'LOGOUT';

const API_BASE_URL = 'https://api-showjunkie.herokuapp.com';

const receiveAuthToken = authToken => ({
  type: AUTHENTICATE,
  authToken,
});

export const login = formData => async (dispatch) => {
  const request = await Axios.post(`${API_BASE_URL}/auth/login`, formData);
  const authToken = request.data.auth_token;
  dispatch(receiveAuthToken(authToken));
};

export const signup = formData => async (dispatch) => {
  const request = await Axios.post(`${API_BASE_URL}/signup`, formData);
  const authToken = request.data.auth_token;
  dispatch(receiveAuthToken(authToken));
};


export const signout = () => ({
  type: LOGOUT,
});
