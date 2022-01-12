import { createSlice } from '@reduxjs/toolkit';
import { AllEvents } from 'models';

const initialState: AllEvents = {
  allEvents: [],
  error: '',
  loading: false,
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
});

export const reservationReducer = reservationSlice.reducer;
