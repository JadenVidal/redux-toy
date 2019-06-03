import { combineReducers } from 'redux';

import Reducer from './reducer';

const appReducer = combineReducers({
  reducer: Reducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;