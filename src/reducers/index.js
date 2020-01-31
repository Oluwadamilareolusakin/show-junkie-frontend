import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import showReducer from './show';
import favouritesReducer from './favourites';
import filterReducer from './filter';
import enquiriesReducer from './enquiries';
import suggestionsReducer from './suggestions';
import sharedReducer from './shared';

const rootReducer = combineReducers({
  authenticationReducer,
  enquiriesReducer,
  favouritesReducer,
  filterReducer,
  sharedReducer,
  showReducer,
  suggestionsReducer,
});

export default rootReducer;
