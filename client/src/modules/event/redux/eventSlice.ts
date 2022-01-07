import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllEvents, Event } from 'models';

const initialState: AllEvents = {
  allEvents: [],
  error: '',
  loading: false,
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<Event>) {
      state.allEvents.push(action.payload);
    },
  },
});

export const eventReducer = eventSlice.reducer;
