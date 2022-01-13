import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';
import { RootState } from 'modules/redux-store';
import { fetchUserById } from 'modules/user';

const initialState: User = {
  confirmation: '',
  message: '',
  data: {
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
    editProfile: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUserById.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.confirmation = action.payload.confirmation;
        state.message = action.payload.message;
        state.data = action.payload.data;
      },
    );
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;

export const { editProfile } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.data;
