import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

export const signinUser = createAsyncThunk('user/login', async ({ email, password }) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/account/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );

  return data;
});

export const signoutUser = createAsyncThunk('user/logout', async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/account/logout`, {
    withCredentials: true,
  });

  return data;
});

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/account/me`, {
    withCredentials: true,
  });

  return data.data;
});

const initialState = {
  user: null,
  status: 'idle',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // add edit user settings actions here.
  },
  extraReducers: builder => {
    builder

      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = 'succeeded';
          state.user = action.payload;
          return state;
        }
        state.status = 'idle';
        state.user = {};
        return state;
      })
      .addCase(signinUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.status = 'rejected';
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        return state;
      })
      .addCase(signoutUser.pending, (state, action) => {
        state.status = 'loading';
      })

      .addCase(signoutUser.fulfilled, (state, action) => {
        state.user = {};
        state.status = 'succeeded';
        return state;
      });
  },
});

export default userSlice.reducer;

export const selectUser = state => state.user;

export const selectCurrentUser = createSelector(selectUser, state => state.user);
export const selectUserStatus = createSelector(selectUser, state => state.status);
