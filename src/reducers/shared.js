const RESET_CREATED = 'RESET_CREATED';
const CREATE = 'CREATE';
const LOADING = 'LOADING';
const FINISHED = 'FINISHED';

const sharedReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE: {
      return { ...state, created: true };
    }

    case RESET_CREATED: {
      return { ...state, created: false };
    }

    case LOADING: {
      return {
        ...state, loading: true, loadingAction: action.loadingAction, done: false,
      };
    }

    case FINISHED: {
      return {
        ...state, loading: false, loadingAction: '', done: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default sharedReducer;
