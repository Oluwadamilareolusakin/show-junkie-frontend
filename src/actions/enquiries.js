import Axios from 'axios';
import { create } from './shared';

const RECIEVE_ENQUIRIES = 'RECIEVE_ENQUIRIES';
const API_BASE_URL = 'https://api-showjunkie.herokuapp.com';


export const createEnquiry = (message, userId = 1) => async (dispatch) => {
  try {
    const form = new FormData();
    form.set('message', message);
    form.set('user_id', userId);
    const postRequest = await Axios.post(`${API_BASE_URL}/users/${userId}/enquiries`, form);
    postRequest.then(dispatch(create()));
  } catch (error) {
    // handle Errors
  }
};

const recieveEnquiries = (enquiries) => ({
  type: RECIEVE_ENQUIRIES,
  enquiries,
});

export const fetchEnquiries = () => async (dispatch) => {
  try {
    const enquiries = await Axios.get(`${API_BASE_URL}/enquiries`);
    enquiries.then((data) => dispatch(recieveEnquiries(data)));
  } catch (error) {
    // handle errors
  }
};
