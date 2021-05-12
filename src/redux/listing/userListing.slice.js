import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserListings = createAsyncThunk('userListing/fetchUserListings', async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user-actions/find-all`, {
    withCredentials: true,
  });
  // console.log('fetchUserListings data:', data);
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
  // console.log('createListing data:', data);

  return data;
});

// just have user listings and add a new one adds it to the end and we display all user listings including the new one in the redirect after createListing. This would only work if we use an array.
const initialState = {
  userListings: {},
  userListingUploading: {},
  count: 0,
  status: 'idle', // idle | fetching | success | error
};

const userListingSlice = createSlice({
  name: 'userListing',
  initialState,
  reducers: {
    cleanState: (state, action) => {
      state.status = 'idle';
      // state.userListings = {};
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
        const objectifiedListings = {};

        // we need to add sorting.
        if (listings) listings.forEach(listing => (objectifiedListings[listing._id] = listing));

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
        state.userListingUploading = payload.data;

        state.status = 'success';

        return state;
      });
  },
});

export default userListingSlice.reducer;

export const { cleanState } = userListingSlice.actions;

export const selectUserListings = state => state.userListing;
export const selectCurrentUserListings = createSelector(
  selectUserListings,
  state => state.userListings
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
