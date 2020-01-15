const RESET_CREATED = "RESET_CREATED";
const CREATE = "CREATE";

export const resetCreated = () => {
  return {
    type: RESET_CREATED,
  };
};

export const create = () => {
  return {
    type: CREATE,
  };
};
