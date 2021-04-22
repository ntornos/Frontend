// redux inicialization functions. start store, activate middlewares.
import { createStore, applyMiddleware } from 'redux';

// devtooling in browser.
import { composeWithDevTools } from 'redux-devtools-extension';

import { createLogger } from 'redux-logger';

// allows fetching in redux.
import reduxThunk from 'redux-thunk';

// global reducer, manages all the reducers.
import { rootReducer } from './rootReducer';

// All middleware goes here.
let middleWares = [reduxThunk];

if (process.browser) {
  middleWares = [...middleWares, createLogger({ collapsed: true })];
}

// Store gets created, passing all the activated middlewares to our devtooling system.
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
