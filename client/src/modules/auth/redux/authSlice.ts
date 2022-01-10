import { createSlice } from '@reduxjs/toolkit';
import { AllEvents } from 'models';

const initialState: AllEvents = {
  allEvents: [],
  error: '',
  loading: false,
};

export const authSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
