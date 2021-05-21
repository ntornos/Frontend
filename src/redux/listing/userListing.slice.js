import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteListing = createAsyncThunk('userListing/deleteListing', async id => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_SERVER_URL}/user-actions/delete-listing/${id}`,
    { withCredentials: true }
  );

  return id;
});

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
  // in this case data.data is the actual item, because the API sends it with a key data;

  if (data.status) return data.data;

  return data;
});

// have user listings and add a new one adds it to the end and we display all user listings including the new one in the redirect after createListing. This would only work if we use an array.
const initialState = {
  userListings: {},
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
      state.userListings = {};
      state.listingInProcess = {};
      state.count = 0;
      state.status = 'idle';
      return state;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(deleteListing.pending, (state, action) => {
        state.status = 'fetching';
        return state;
      })
      .addCase(deleteListing.fulfilled, (state, { payload }) => {
        if (state.listingInProcess._id === payload) state.listingInProcess = {};
        delete state.userListings[payload];
        state.count -= 1;
        return state;
      })

      .addCase(fetchUserListings.pending, (state, action) => {
        state.status = 'fetching';
        return state;
      })
      .addCase(fetchUserListings.fulfilled, (state, { payload }) => {
        const listings = payload.data;
        console.log(`listings`, listings);
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
        state.listingInProcess = payload;
        state.userListings[payload._id] = payload;
        state.count++;
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

export const selectListingInProcess = createSelector(
  selectUserListings,
  ({ listingInProcess }) => listingInProcess
);

export const selectListingInProcessId = createSelector(
  selectListingInProcess,
  listing => listing._id
);

export const selectListingRequestStatus = createSelector(
  [selectUserListings],
  ({ status }) => status
);

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
