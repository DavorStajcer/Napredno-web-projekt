import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllEvents, Event } from 'models';
import {
  editEventById,
  fetchEventById,
  fetchUserEvents,
  getAllFutureEvents,
  postEvent,
} from 'modules/event';
import { RootState } from 'modules/redux-store';

const initialState: AllEvents = {
  availableEvents: [],
  myEvents: [],
  passedEvents: [],
  futureEvents: [],
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
  reducers: {},
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
      state.loading = false;
    });
    builder.addCase(getAllFutureEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.confirmation = action.payload.confirmation;
      state.message = action.payload.message;
      state.availableEvents = action.payload.allEvents;
    });
    builder.addCase(getAllFutureEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(editEventById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editEventById.fulfilled, (state, action) => {
      state.loading = false;
      state.confirmation = action.payload.confirmation;
      state.message = action.payload.message;
    });
    builder.addCase(editEventById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchUserEvents.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchUserEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.confirmation = action.payload.confirmation;
      state.message = action.payload.message;
      state.myEvents = action.payload.allEvents;
      state.passedEvents = action.payload.allEvents.filter(
        (event) => new Date(event.date) < new Date(),
      );
      state.futureEvents = action.payload.allEvents.filter(
        (event) => new Date(event.date) > new Date(),
      );
    });
    builder.addCase(fetchUserEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const eventReducer = eventSlice.reducer;

export const selectAvailableEvents = (state: RootState) =>
  state.events.availableEvents;
export const selectMyEvents = (state: RootState) => state.events.myEvents;
export const selectPassedEvents = (state: RootState) =>
  state.events.passedEvents;
export const selectFutureEvents = (state: RootState) =>
  state.events.futureEvents;
export const selectEventsLoading = (state: RootState) => state.events.loading;
export const selectEvent = (state: RootState) => state.events.event;
