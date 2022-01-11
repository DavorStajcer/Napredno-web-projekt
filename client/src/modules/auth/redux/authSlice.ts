import { createSlice } from '@reduxjs/toolkit';
import { Auth } from 'models';
import { RootState } from 'modules/redux-store';

const initialState: Auth = {
  data: {
    confirmation: '',
    didAutoLogout: false,
    message: '',
    refreshToken: '',
    token: '',
    userId: '',
  },
  error: '',
  loading: false,
};

export const authSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    registerPending: (state) => {
      state.loading = true;
    },
    registerFulfilled: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    registerRejected: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    loginPending: (state) => {
      state.loading = true;
    },
    loginFulfilled: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    loginRejected: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    refreshTokenPending: (state) => {
      state.loading = true;
    },
    refreshTokenFulfilled: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    refreshTokenRejected: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    logout: (state) => {
      state.data = {
        userId: '',
        refreshToken: '',
        token: '',
        confirmation: '',
        didAutoLogout: false,
        message: '',
      };
      state.loading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const selectAuth = (state: RootState) => state.auth;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const {
  registerPending,
  registerFulfilled,
  registerRejected,
  loginPending,
  loginFulfilled,
  loginRejected,
  refreshTokenPending,
  refreshTokenFulfilled,
  refreshTokenRejected,
  logout,
} = authSlice.actions;
