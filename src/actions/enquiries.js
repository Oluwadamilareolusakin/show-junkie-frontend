import Axios from "axios";

const CREATED_ENQUIRY = "CREATE_ENQUIRY";
const RECIEVE_ENQUIRIES = "RECIEVE_ENQUIRIES";
const API_BASE_URL = "https://api-showjunkie.herokuapp.com";

export const fetchEnquiries = () => {
  return async(dispatch) => {
    try {
      const enquiries = await Axios.get(`${API_BASE_URL}/enquiries`)
      enquiries.then(data => dispatch(recieveEnquiries(data)));
    } catch(error) {
      console.log(error);
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
      postRequest.then(dispatch(createdEnquiry()) )
    } catch(error) {
      console.log(error);
    }
  };
};

const recieveEnquiries = (enquiries) => {
  return {
    type: RECIEVE_ENQUIRIES,
    enquiries,
  }
} 

const createdEnquiry = (message) => {
  return {
    type: CREATED_ENQUIRY,
  };
};