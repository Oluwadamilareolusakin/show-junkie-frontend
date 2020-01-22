const RESET_CREATED = 'RESET_CREATED';
const CREATE = 'CREATE';
const LOADING = 'LOADING';
const FINISHED = 'FINISHED';

export const resetCreated = () => ({
  type: RESET_CREATED,
});

export const create = () => ({
  type: CREATE,
});

export const loading = (loadingAction) => {
  return {
    type: LOADING,
    loadingAction,
  }
};

export const finished = () => {
  return {
    type: FINISHED,
  }
};
