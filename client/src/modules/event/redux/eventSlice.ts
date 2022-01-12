import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllEvents, Event } from 'models';
import { getAllFutureEvents, postEvent } from 'modules/event';
import { RootState } from 'modules/redux-store';

const initialState: AllEvents = {
  allEvents: [],
  futureEvents: [],
  passedEvents: [],
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
    getPassedEvents: (state) => {
      state.passedEvents = state.allEvents.filter(
        (event) => new Date(event.date).getTime() < new Date().getTime(),
      );
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
    builder.addCase(getAllFutureEvents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllFutureEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.allEvents = action.payload.data.events;
    });
    builder.addCase(getAllFutureEvents.rejected, (state, action) => {
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
  getPassedEvents,
} = eventSlice.actions;
export const selectAllEvents = (state: RootState) => state.events.allEvents;
export const selectPassedEvents = (state: RootState) =>
  state.events.passedEvents;
export const selectEventsLoading = (state: RootState) => state.events.loading;
