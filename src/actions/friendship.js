const FRIEND = "FRIEND";
const UNFRIEND = "UNFRIEND";

export const friend = (id) => {
  return {
    type: FRIEND,
    id,
  };
};

export const unFriend = (id) => {
  return {
    type: UNFRIEND,
    id,
  };
};