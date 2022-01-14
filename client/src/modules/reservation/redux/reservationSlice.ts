import { createSlice } from '@reduxjs/toolkit';
import { AllReservations } from 'models';
import { RootState } from 'modules';
import { fetchUserReservations, postReservation } from 'modules/reservation';

const initialState: AllReservations = {
  confirmation: '',
  message: '',
  allReservations: [],
  error: '',
  loading: false,
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postReservation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postReservation.fulfilled, (state, action) => {
      state.loading = false;
      state.confirmation = action.payload.confirmation;
      state.message = action.payload.message;
    });
    builder.addCase(postReservation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchUserReservations.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchUserReservations.fulfilled, (state, action) => {
      state.loading = false;
      state.confirmation = action.payload.confirmation;
      state.message = action.payload.message;
      state.allReservations = action.payload.allReservations;
    });
    builder.addCase(fetchUserReservations.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const reservationReducer = reservationSlice.reducer;
export const selectMyReservations = (state: RootState) =>
  state.reservation.allReservations;
