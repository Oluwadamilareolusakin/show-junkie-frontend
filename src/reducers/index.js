import { combineReducers } from 'redux';
import friendshipReducer from './friendship';
import sessionReducer from './session';
import showReducer from './show';
import filterReducer from './filter';
import enquiriesReducer from './enquiries';

const rootReducer = combineReducers({
  sessionReducer,
  friendshipReducer,
  showReducer,
  filterReducer,
  enquiriesReducer,
}); 

export default rootReducer;