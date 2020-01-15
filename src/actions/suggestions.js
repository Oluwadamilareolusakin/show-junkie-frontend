import Axios from "axios";
import { create } from './shared';

const RECIEVE_SUGGESTIONS = "RECIEVE_SUGGESTIONS";
const API_BASE_URL = "https://api-showjunkie.herokuapp.com";

export const fetchsuggestions = () => {
  return async(dispatch) => {
    try {
      const suggestions = await Axios.get(`${API_BASE_URL}/suggestions`)
      suggestions.then(data => dispatch(recieveSuggestions(data)));
    } catch(error) {
      //handle errors
    }
  }
}


export const createSuggestion = (message, user_id = 1) => {
  return async(dispatch) => {
    try {
      const form = new FormData();
      form.set('message', message);
      form.set('user_id', user_id )
      const postRequest = await Axios.post(`${API_BASE_URL}/users/${user_id}/suggestions`, form);
      postRequest.then(dispatch(create()) )
    } catch(error) {
      console.log(error)
    }
  };
};

const recieveSuggestions = (suggestions) => {
  return {
    type: RECIEVE_SUGGESTIONS,
    suggestions,
  };
};