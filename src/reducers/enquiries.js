const CREATED_ENQUIRY = "CREATE_ENQUIRY";
const RECIEVE_ENQUIRIES = "RECIEVE_ENQUIRIES";

const enquiriesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_ENQUIRIES: {
      return Object.assign({}, state, {enquiries: [...state, ...action.equiries]})
    }

    case CREATED_ENQUIRY: {
      return Object.assign({}, state, {createdEnquiry: true})
    }

    default:{
      return state;
    }
  }
}

export default enquiriesReducer;