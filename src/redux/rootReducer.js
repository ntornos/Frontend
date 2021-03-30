import { combineReducers } from 'redux';

import userInterfaceReducer from './user-interface/userInterface.reducer';

export const rootReducer = combineReducers({
  userInterface: userInterfaceReducer,
});
