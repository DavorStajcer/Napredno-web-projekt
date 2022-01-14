import { createSlice } from '@reduxjs/toolkit';
import { User } from 'models/user';

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

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
});

export const reservationReducer = reservationSlice.reducer;
