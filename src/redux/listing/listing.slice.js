import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allListings: {},
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
