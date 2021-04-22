import { combineReducers } from 'redux';

import userInterfaceReducer from './user-interface/userInterface.reducer';
import listingsReducer from './listings/listings.reducer';

export const rootReducer = combineReducers({
  userInterface: userInterfaceReducer,
  listings: listingsReducer,
});
