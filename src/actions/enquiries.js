import Axios from "axios";

const CREATED_ENQUIRY = "CREATE_ENQUIRY";
const RECIEVE_ENQUIRIES = "RECIEVE_ENQUIRIES";
const API_BASE_URL = "https://api-showjunkie.herokuapp.com";

export const fetchEnquiries = (user_id = 1) => {
  return async(dispatch) => {
    try {
      const enquiries = await Axios.get(`${API_BASE_URL}/enquiries`)
      enquiries.then(data => dispatch(recieveEnquiries(data)));
    } catch(error) {
      console.log(error);
    }
  }
}


export const createEnquiry = (message) => {
  return async(dispatch) => {
    try {
      const form = new FormData();
      form.set('message', message);
      const postRequest = await Axios.post(`${API_BASE_URL}/enquiries`, form, {
        headers: {'Content-Type': 'multi-part/form-data', 'Access-Control-Allow-Origin': '*'},
      });
      postRequest.then( data =>dispatch(createdEnquiry()) )
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