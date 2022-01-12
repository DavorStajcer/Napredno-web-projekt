import { createSlice } from '@reduxjs/toolkit';
import { AllUsers, User } from 'models/user';
import { RootState } from 'modules/redux-store';
import { fetchAllUsers, fetchUserById } from 'modules/user';

const initialState: AllUsers = {
  allUsers: [],
  confirmation: '',
  message: '',
  user: {
    admin: false,
    email: '',
    name: '',
    password: '',
    surname: '',
    _id: '',
    token: '',
  },
  error: '',
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchByIdPending: (state) => {
      state.loading = true;
    },
    fetchByIdFulfilled: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    fetchByIdRejected: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    editProfile: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    getById: (state, action) => {
      state.user = state.allUsers.find(
        (user) => user._id === action.payload,
      ) as User;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.allUsers = action.payload.data.users;
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;
export const selectAllUsers = (state: RootState) => state.user.allUsers;
export const {
  fetchByIdPending,
  fetchByIdFulfilled,
  fetchByIdRejected,
  editProfile,
  getById,
} = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
