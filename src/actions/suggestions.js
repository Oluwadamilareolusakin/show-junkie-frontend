import Axios from 'axios';
import { create } from './shared';

const RECIEVE_SUGGESTIONS = 'RECIEVE_SUGGESTIONS';
const API_BASE_URL = 'https://api-showjunkie.herokuapp.com';


export const createSuggestion = (message, userId = 1) => async (dispatch) => {
  try {
    const form = new FormData();
    form.set('message', message);
    form.set('user_id', userId);
    const postRequest = await Axios.post(`${API_BASE_URL}/users/${userId}/suggestions`, form);
    postRequest.then(dispatch(create()));
  } catch (error) {
    // handle errors
  }
};

const recieveSuggestions = (suggestions) => ({
  type: RECIEVE_SUGGESTIONS,
  suggestions,
});

export const fetchsuggestions = () => async (dispatch) => {
  try {
    const suggestions = await Axios.get(`${API_BASE_URL}/suggestions`);
    suggestions.then((data) => dispatch(recieveSuggestions(data)));
  } catch (error) {
    // handle errors
  }
};
