const RECIEVE_SUGGESTION = 'RECIEVE_SUGGESTION';

const suggestionsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_SUGGESTION: {
      return { ...state, suggestions: [...state, ...action.suggestions] };
    }

    default: {
      return state;
    }
  }
};

export default suggestionsReducer;
