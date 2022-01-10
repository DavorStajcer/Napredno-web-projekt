import { createSlice } from '@reduxjs/toolkit';
import { AllEvents } from 'models';

const initialState: AllEvents = {
  allEvents: [],
  error: '',
  loading: false,
};

export const userSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
