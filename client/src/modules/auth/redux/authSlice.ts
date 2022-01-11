import { createSlice } from '@reduxjs/toolkit';
import { Auth } from 'models';

const initialState: Auth = {
  authData: {
    authenticated: false,
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
      state.authData = action.payload;
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
      state.authData = action.payload;
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
      state.authData.refreshToken = action.payload;
      state.loading = false;
    },
    refreshTokenRejected: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
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
} = authSlice.actions;
