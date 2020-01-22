import Axios from 'axios';
import { create, loading, finished } from './shared';

const RECIEVE_ENQUIRIES = 'RECIEVE_ENQUIRIES';
const API_BASE_URL = 'https://api-showjunkie.herokuapp.com';


export const createEnquiry = (message, authToken) => async (dispatch) => {
  dispatch(loading('Sending Enquiry'));
  try {
    const form = new FormData();
    form.set('message', message);
    const postRequest = await Axios.post(`${API_BASE_URL}/enquiries`, form,
      {
        headers: {
          Authorization: authToken,
          'Content-Type': 'application/json',
        },
      });
    postRequest.then(dispatch(create()));
    setTimeout(() => {
      dispatch(finished());
    }, 2000);
  } catch (error) {
    // handle Errors
  }
  setTimeout(() => {
    dispatch(finished());
  }, 2000);
};

const recieveEnquiries = enquiries => ({
  type: RECIEVE_ENQUIRIES,
  enquiries,
});

export const fetchEnquiries = () => async (dispatch) => {
  try {
    const enquiries = await Axios.get(`${API_BASE_URL}/enquiries`);
    enquiries.then(data => dispatch(recieveEnquiries(data)));
  } catch (error) {
    // handle errors
  }
};
