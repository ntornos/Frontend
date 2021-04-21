import { listingsTypes } from './listings.types';

const initialState = {
  userListings: {},
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case listingsTypes.ADD_NEW_LISTING:
      const currListingId = action.data._id;
      return { ...state, userListings: { ...state.userListings, [currListingId]: action.data } };

    default:
      return state;
  }
};

export default listingsReducer;
