import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllEvents, Event } from 'models';
import { postEvent } from 'modules/event';
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
  extraReducers: (builder) => {
    builder.addCase(postEvent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postEvent.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(postEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
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
