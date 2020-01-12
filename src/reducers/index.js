import { combineReducers } from 'redux';
import friendshipReducer from './friendship';
import sessionReducer from './session';
import showReducer from './show';
import filterReducer from './filter';

const rootReducer = combineReducers({
  sessionReducer,
  friendshipReducer,
  showReducer,
  filterReducer,
}); 

export default rootReducer;