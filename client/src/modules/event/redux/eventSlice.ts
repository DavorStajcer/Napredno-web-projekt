import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllEvents, Event } from 'models';
import { RootState } from 'modules/redux-store';

const initialState: AllEvents = {
  allEvents: [],
  error: '',
  loading: false,
};

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    fetchAllEventsPending: (state) => {
      state.loading = true;
    },
    fetchAllEventsFulfilled: (state, action: PayloadAction<Event[]>) => {
      state.allEvents = action.payload;
      state.loading = false;
    },
    fetchAllEventsRejected: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const eventReducer = eventSlice.reducer;
export const {
  fetchAllEventsPending,
  fetchAllEventsFulfilled,
  fetchAllEventsRejected,
} = eventSlice.actions;
export const selectAllEvents = (state: RootState) => state.events.allEvents;
export const selectEventsLoading = (state: RootState) => state.events.loading;
