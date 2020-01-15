import Axios from "axios";
import { create } from './shared';

const RECIEVE_ENQUIRIES = "RECIEVE_ENQUIRIES";
const API_BASE_URL = "https://api-showjunkie.herokuapp.com";

export const fetchEnquiries = () => {
  return async(dispatch) => {
    try {
      const enquiries = await Axios.get(`${API_BASE_URL}/enquiries`)
      enquiries.then(data => dispatch(recieveEnquiries(data)));
    } catch(error) {
      //handle errors
    }
  }
}


export const createEnquiry = (message, user_id = 1) => {
  return async(dispatch) => {
    try {
      const form = new FormData();
      form.set('message', message);
      form.set('user_id', user_id )
      const postRequest = await Axios.post(`${API_BASE_URL}/users/${user_id}/enquiries`, form);
      postRequest.then(dispatch(create()) )
    } catch(error) {
      //handle Errors
    }
  };
};

const recieveEnquiries = (enquiries) => {
  return {
    type: RECIEVE_ENQUIRIES,
    enquiries,
  }
}