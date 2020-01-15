const RECIEVE_ENQUIRIES = "RECIEVE_ENQUIRIES";

const enquiriesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_ENQUIRIES: {
      return Object.assign({}, state, {enquiries: [...state, ...action.equiries]})
    }

    default:{
      return state;
    }
  }
}

export default enquiriesReducer;