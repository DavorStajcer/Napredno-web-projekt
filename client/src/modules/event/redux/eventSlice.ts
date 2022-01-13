import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllEvents, Event } from 'models';
import { fetchEventById, getAllFutureEvents, postEvent } from 'modules/event';
import { RootState } from 'modules/redux-store';

const initialState: AllEvents = {
  allEvents: [],
  futureEvents: [],
  passedEvents: [],
  confirmation: '',
  event: {
    _id: '',
    adminId: '',
    count: 0,
    date: new Date(),
    description: '',
    imageUrl: '',
    location: '',
    maxAttendees: 0,
    name: '',
    userEmail: '',
    userName: '',
    userSurname: '',
  },
  message: '',
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
    builder.addCase(postEvent.fulfilled, (state, action) => {
      state.loading = false;
      state.confirmation = action.payload.confirmation;
      state.message = action.payload.message;
    });
    builder.addCase(postEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchEventById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchEventById.fulfilled,
      (state, action: PayloadAction<Event>) => {
        state.loading = false;
        state.event = action.payload;
      },
    );
    builder.addCase(fetchEventById.rejected, (state, action) => {
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
export const selectEvent = (state: RootState) => state.events.event;
