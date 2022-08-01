import {combineReducers} from 'redux';
import auth from './auth';
import types from '../types';
import isFirstTime from './isFirstTime';
import loginPin from './loginPin';
import userId from './userId';
const appReducer = combineReducers({
  auth,
  isFirstTime,
  loginPin,
  userId,
});
const rootReducer = (state, action) => {
  if (action.type == types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
