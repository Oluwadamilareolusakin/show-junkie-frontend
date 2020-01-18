import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import showReducer from './show';
import filterReducer from './filter';
import enquiriesReducer from './enquiries';
import suggestionsReducer from './suggestions';
import sharedReducer from './shared';

const rootReducer = combineReducers({
  authenticationReducer,
  showReducer,
  filterReducer,
  enquiriesReducer,
  suggestionsReducer,
  sharedReducer,
});

export default rootReducer;
