import { combineReducers } from 'redux';
import friendshipReducer from './friendship';
import sessionReducer from './session';
import showReducer from './show';
import filterReducer from './filter';
import enquiriesReducer from './enquiries';
import suggestionsReducer from './suggestions';
import sharedReducer from './shared';

const rootReducer = combineReducers({
  sessionReducer,
  friendshipReducer,
  showReducer,
  filterReducer,
  enquiriesReducer,
  suggestionsReducer,
  sharedReducer,
}); 

export default rootReducer;