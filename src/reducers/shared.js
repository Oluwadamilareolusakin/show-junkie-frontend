const RESET_CREATED = "RESET_CREATED";
const CREATE = "CREATE";

const sharedReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE: {
      return Object.assign({}, state, {created: true})
    }

    case RESET_CREATED: {
      return Object.assign({}, state, {created: false})
    }

    default: {
      return state;
    }
  }
};

export default sharedReducer;