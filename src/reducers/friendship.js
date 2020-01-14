const FRIEND = "FRIEND";
const UNFRIEND = "UNFRIEND";

const friendshipReducer = (state = [], action) => {
  switch (action.type) {
    case FRIEND: 
      const { friender, friended} = action;
      return;
    case UNFRIEND:
      return;
    default:
      return false
  }
};

export default friendshipReducer;