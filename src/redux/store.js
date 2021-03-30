// redux inicialization functions. start store, activate middlewares.
import { createStore, applyMiddleware } from 'redux';

// devtooling in browser.
import { composeWithDevTools } from 'redux-devtools-extension';

// allows fetching in redux.
import reduxThunk from 'redux-thunk';

// global reducer, manages all the reducers.
import { rootReducer } from './rootReducer';

// All middleware goes here.
const middleWares = [reduxThunk];

// Store gets created, passing all the activated middlewares to our devtooling system.
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
