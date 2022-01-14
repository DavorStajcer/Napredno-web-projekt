/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from 'fixtures';
import { Reservation } from 'models';

/*router.post("/create", isAuth, reservationController.postCreateReservation); eventId

router.post("/delete", isAuth, reservationController.postDeleteReservation); reservationId

router.get('/user', isAuth, reservationController.getFetchUserReservations)get */
const createReservationEndpoint = '/api/reservation/create';
const deleteReservationEndpoint = '/api/reservation/delete';
const fetchUserReservationsEndpoint = '/api/reservation/user';

export const postReservation = createAsyncThunk(
  'event/postReservation',
  async (eventId: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await API.post(
        createReservationEndpoint,
        { eventId },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const data = response.data;
      console.log('Post reservation endpoint', data);
      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

export const fetchUserReservations = createAsyncThunk(
  'event/fetchUserReservations',
  async () => {
    try {
      const token = localStorage.getItem('token') as string;

      const response = await API.get(fetchUserReservationsEndpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      console.log('returned data', data);
      const returnData = {
        confirmation: data.confirmation as string,
        message: data.message as string,
        allReservations: data.data.reservations as Reservation[],
      };

      return returnData;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

export const deleteReservation = createAsyncThunk(
  'event/deleteReservation',
  async (reservationId: string) => {
    try {
      const token = localStorage.getItem('token') as string;
      const response = await API.post(
        deleteReservationEndpoint,
        { reservationId },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const data = response.data;
      console.log('delete response', data);
      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);
