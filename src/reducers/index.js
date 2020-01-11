import { combineReducers } from 'redux';
import friendshipReducer from './friendship';
import sessionReducer from './session';
import showReducer from './show';

const rootReducer = combineReducers({
  sessionReducer,
  friendshipReducer,
  showReducer,
}); 

export default rootReducer;