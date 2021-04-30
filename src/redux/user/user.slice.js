import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

export const signinUser = createAsyncThunk('user/login', async ({ email, password }) => {
  const data = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/account/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );

  return data.data;
});

export const signupUser = createAsyncThunk(
  'user/register',
  async ({ email, password }, thunkAPI) => {
    const { data, status, statusText } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/account/register`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    // if response status is 200 the request was succesful
    // data.status is true when user is created
    // data.status is false when user already exists
    if (status === 200) return data.status;
    // any other response code will be rejected
    else return thunkAPI.rejectWithValue(statusText);
  }
);

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
  status: 'idle', // idle | fetching | rejected | success | error
  operation: '', // signin | signout | fetchuser | signup
  errorMessage: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // add edit user settings actions here.
    clearState: (state, action) => {
      state.status = 'idle';
      state.errorMessage = '';
      state.operation = '';
      return state;
    },
  },
  extraReducers: builder => {
    builder
      // Fetch user
      .addCase(fetchUser.pending, (state, action) => {
        state.status = 'fetching';
        state.operation = 'fetchuser';
        return state;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = 'success';
          state.user = action.payload;
          return state;
        }
        state.status = 'idle';
        state.user = {};
        return state;
      })

      // Sign in
      .addCase(signinUser.pending, (state, action) => {
        state.status = 'fetching';
        state.errorMessage = '';
        state.operation = 'signin';
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = 'Invalid Credentials';
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.status = 'success';
        return state;
      })

      // Sign up
      .addCase(signupUser.pending, (state, action) => {
        state.status = 'fetching';
        state.operation = 'signup';
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.errorMessage = action.payload;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        if (!action.payload) {
          state.status = 'error';
          state.errorMessage = 'User already exists.';
        } else {
          state.status = 'success';
          state.errorMessage = '';
        }
        return state;
      })
      // .addCase(signoutUser.pending, (state, action) => {
      //   state.status = 'loading';
      // })

      // Sign out
      .addCase(signoutUser.fulfilled, (state, action) => {
        state.user = {};
        state.status = 'success';
        return state;
      });
  },
});

export default userSlice.reducer;

export const { clearState } = userSlice.actions;

export const selectUser = state => state.user;
export const selectCurrentUser = createSelector(selectUser, state => state.user);
export const selectUserStatus = createSelector(selectUser, state => state.status);
