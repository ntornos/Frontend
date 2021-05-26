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

  return data.status;
});

export const signupUser = createAsyncThunk(
  'user/register',
  async ({ email, password }, thunkAPI) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/account/register`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    // data.status is true when user is created
    // data.status is false when user already exists
    return data.status;
  }
);

export const signoutUser = createAsyncThunk('user/logout', async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/account/logout`, {
    withCredentials: true,
  });

  return data;
});

export const fetchUser = createAsyncThunk('user/fetchUser', async (params, thunkAPI) => {
  const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/account/me`, {
    withCredentials: true,
  });

  // thunk should be rejected. Now it's not changing anything but its fulfilled when no user is logged in.
  // if (!data._id) {
  //   return thunkAPI.rejectWithValue('No user logged in');
  // }
  // thunkAPI.dispatch(clearState());

  return data.data;
});

export const operations = {
  SIGN_OUT: 'SIGN_OUT',
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  FETCH_USER: 'FETCH_USER',
};

const initialState = {
  user: null,
  status: 'idle', // idle | fetching | success | error
  operation: '', // | sign-out | fetch-user | sign-up
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
        state.operation = operations.FETCH_USER;
        return state;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = action.payload;
        return state;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = 'success';
          state.user = action.payload;
          return state;
        }
        state.status = 'success';
        return state;
      })

      // Sign in
      .addCase(signinUser.pending, (state, action) => {
        state.status = 'fetching';
        state.operation = operations.SIGN_IN;
        return state;
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = 'Invalid Credentials';
        return state;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.status = 'success';
        return state;
      })

      // Sign up
      .addCase(signupUser.pending, (state, action) => {
        state.status = 'fetching';
        state.operation = operations.SIGN_UP;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'error';
        state.errorMessage = 'An user associated with this email already exists.';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'success';
        return state;
      })

      // Sign out
      .addCase(signoutUser.pending, (state, action) => {
        state.status = 'fetching';
        state.operation = operations.SIGN_OUT;
        return state;
      })
      .addCase(signoutUser.fulfilled, (state, action) => {
        state.user = null;
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
