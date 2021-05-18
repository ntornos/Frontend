import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserListings = createAsyncThunk('userListing/fetchUserListings', async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user-actions/find-all`, {
    withCredentials: true,
  });
  return data;
});

export const createListing = createAsyncThunk('userListing/createListing', async values => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/user-actions/create-listing`,
    {
      ...values,
    },
    {
      withCredentials: true,
    }
  );

  return data;
});

// have user listings and add a new one adds it to the end and we display all user listings including the new one in the redirect after createListing. This would only work if we use an array.
const initialState = {
  userListings: null,
  listingInProcess: {},
  count: 0,
  status: 'idle', // idle | fetching | success | error
};

const userListingSlice = createSlice({
  name: 'userListing',
  initialState,
  reducers: {
    cleanState: (state, action) => {
      state.status = 'idle';
      return state;
    },
    signOutClearListingState: (state, action) => {
      state.userListings = null;
      state.listingInProcess = {};
      state.count = 0;
      state.status = 'idle';
      return state;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserListings.pending, (state, action) => {
        state.status = 'fetching';
        return state;
      })
      .addCase(fetchUserListings.fulfilled, (state, { payload }) => {
        const listings = payload.data;
        let objectifiedListings;

        // we need to add sorting.
        // if (listings) listings.forEach(listing => (objectifiedListings[listing._id] = listing));
        if (listings)
          objectifiedListings = listings.reduce((prevVal, currVal) => {
            prevVal[currVal._id] = currVal;
            return prevVal;
          }, {});

        state.userListings = objectifiedListings;
        state.count = payload.count;
        state.status = 'success';
        return state;
      })
      .addCase(createListing.pending, (state, action) => {
        state.status = 'fetching';
        return state;
      })
      .addCase(createListing.fulfilled, (state, { payload }) => {
        state.listingInProcess = payload.data;
        state.status = 'success';
        return state;
      });
  },
});

export default userListingSlice.reducer;

export const { cleanState, signOutClearListingState } = userListingSlice.actions;

export const selectUserListings = state => state.userListings;

export const selectCurrentUserListings = createSelector(
  selectUserListings,
  state => state.userListings
);

export const selectCurrentUserListingsArr = createSelector(selectUserListings, ({ userListings }) =>
  userListings ? Object.keys(userListings).map(key => userListings[key]) : []
);

export const selectListingCount = createSelector(selectUserListings, ({ count }) => count);

// santoDomingo: {
//   bellaVista: {
//     house: {
//       id1: {
//         price: 'bla',
//         images: 'bla',
//         amenities: 'bla',
//         address: 'bla',
//       },
//       id2: {
//         price: 'bla',
//         images: 'bla',
//         amenities: 'bla',
//         address: 'bla',
//       }
//     }
//   }
// }
