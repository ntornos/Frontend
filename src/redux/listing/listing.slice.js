import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allListings: {},
  // just have user listings and add a new one adds it to the end and we display all user listings including the new one in the redirect after createListing
  userListings: {},
};

const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.allListings = {};
      state.userListings = {};
      return state;
    },
  },
});

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
