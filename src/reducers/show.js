const GET_SHOW = "GET_SHOW";


const showReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SHOW:
      return Object.assign({}, state);
    default:
      return state;
  };
};

export default showReducer;