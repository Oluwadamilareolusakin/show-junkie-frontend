import Axios from 'axios';
import { loading, finished } from './shared';

const AUTHENTICATE = 'AUTHENTICATE';
const LOGOUT = 'LOGOUT';

const API_BASE_URL = 'https://api-showjunkie.herokuapp.com';

const receiveAuthToken = (authToken, user) => ({
  type: AUTHENTICATE,
  authToken,
  user,
});

export const login = formData => async (dispatch) => {
  dispatch(loading('Signing you in'));
  const request = await Axios.post(`${API_BASE_URL}/auth/login`, formData);
  const { data } = request;
  const { user } = data;
  const authToken = data.auth_token;
  dispatch(receiveAuthToken(auth_token, user));
  dispatch(finished());
};

export const signup = formData => async (dispatch) => {
  dispatch(loading('Signing up'));
  const request = await Axios.post(`${API_BASE_URL}/signup`, formData);
  const { data } = request;
  const { authToken, user } = data;
  dispatch(receiveAuthToken(authToken, user));
  dispatch(finished());
};


export const signout = () => ({
  type: LOGOUT,
});
