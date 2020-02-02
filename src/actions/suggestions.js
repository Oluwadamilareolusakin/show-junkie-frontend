import Axios from 'axios';
import { create, loading, finished } from './shared';

const RECIEVE_SUGGESTIONS = 'RECIEVE_SUGGESTIONS';
const API_BASE_URL = 'https://api-showjunkie.herokuapp.com';


export const createSuggestion = (message, authToken) => async (dispatch) => {
  dispatch(loading('Sending suggestion'));
  try {
    const form = new FormData();
    form.set('message', message);
    const postRequest = await Axios.post(`${API_BASE_URL}/suggestions`, form,
      {
        headers: {
          Authorization: authToken,
          'Content-Type': 'applications/json',
        },
      });
    setTimeout(() => {
      dispatch(finished());
    }, 1000);
    postRequest.then(dispatch(create()));
  } catch (error) {
    // handle errors
  }
};

const recieveSuggestions = suggestions => ({
  type: RECIEVE_SUGGESTIONS,
  suggestions,
});

export const fetchsuggestions = () => async (dispatch) => {
  try {
    const suggestions = await Axios.get(`${API_BASE_URL}/suggestions`);
    suggestions.then(data => dispatch(recieveSuggestions(data)));
  } catch (error) {
    // handle errors
  }
};
