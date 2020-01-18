import Axios from "axios";

const AUTHENTICATE = "AUTHENTICATE";

const API_BASE_URL = 'https://api-showjunkie.herokuapp.com';

const receiveAuthToken = (authToken) => {
  return {
    type: AUTHENTICATE,
    authToken,
  }
}

export const login = formData => async(dispatch) => {
  const request = await Axios.post(`${API_BASE_URL}/auth/login`, formData);
  request.then(data => dispatch(receiveAuthToken(data.auth_token)));
};

export const signup = formData => async(dispatch) => {
  const request = await Axios.post(`${API_BASE_URL}/signup`, formData);
  request.then(data => dispatch(receiveAuthToken(data.auth_token)));
} 
