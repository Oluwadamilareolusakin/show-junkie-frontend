import { combineReducers } from 'redux';
import sessionReducer from './session';
import showReducer from './show';
import filterReducer from './filter';
import enquiriesReducer from './enquiries';
import suggestionsReducer from './suggestions';
import sharedReducer from './shared';

const rootReducer = combineReducers({
  sessionReducer,
  showReducer,
  filterReducer,
  enquiriesReducer,
  suggestionsReducer,
  sharedReducer,
}); 

export default rootReducer;