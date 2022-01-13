/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppDispatch, AppThunk } from 'modules/redux-store';
import {
  fetchAllEventsPending,
  fetchAllEventsFulfilled,
  fetchAllEventsRejected,
  EventData,
  EditEventData,
} from 'modules/event';

import { Event } from 'models';
import { API } from 'fixtures';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchEventByIdData } from 'modules/event/consts/fetchEventByIdData';
import { DeleteEventData } from 'modules/event/consts/deleteEventData';

const allEventsEndPoint = '/fetch-all';
const fetchEventByIdEndpoint = '/api/event/fetch-one';
const fetchAllFutureEvents = '/api/event/fetch-all';
const createEventEndpoint = '/api/event/create';
const editEventEndpoint = '/api/event/edit';
const deleteEventEndpoint = '/api/event/delete';
const fetchUsersEventsEndpoint = '/api/event/fetch-users';

export const postEvent = createAsyncThunk(
  'event/postEvent',
  async (event: EventData) => {
    try {
      const response = await API.post(createEventEndpoint, event, {
        headers: { Authorization: `Bearer ${event.token}` },
      });
      const data = response.data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

export const getAllFutureEvents = createAsyncThunk(
  'event/getAllFutureEvents',
  async () => {
    try {
      const token = localStorage.getItem('token') as string;

      const response = await API.get(fetchAllFutureEvents, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;

      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

export const fetchEventById = createAsyncThunk(
  'event/getAllFutureEvents',
  async (eventData: FetchEventByIdData) => {
    try {
      const response = await API.post(
        fetchEventByIdEndpoint,
        { eventId: eventData.eventId },
        {
          headers: { Authorization: `Bearer ${eventData.token}` },
        },
      );
      const data = response.data;

      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

export const editEventById = createAsyncThunk(
  'event/editEventById',
  async (eventData: EditEventData) => {
    try {
      const response = await API.post(editEventEndpoint, eventData, {
        headers: { Authorization: `Bearer ${eventData.token}` },
      });
      const data = response.data;
      console.log('edit event by id response', data);
      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);
export const deleteEvent = createAsyncThunk(
  'event/deleteEvent',
  async (eventData: DeleteEventData) => {
    try {
      const response = await API.post(editEventEndpoint, eventData.eventId, {
        headers: { Authorization: `Bearer ${eventData.token}` },
      });
      const data = response.data;
      console.log('delete event by id response', data);
      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);
export const fetchUserEvents = createAsyncThunk(
  'event/fetchUserEvents',
  async (token: string) => {
    try {
      const response = await API.get(
        fetchUsersEventsEndpoint,

        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const data = response.data;
      console.log('fetch users events response', data);
      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);
/*

API.delete(`users/${this.state.id}`);
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
   key: "value"
};

Axios.post( 
  'http://localhost:8000/api/v1/get_token_payloads',
  bodyParameters,
  config
).then(console.log).catch(console.log);
`https://event-planner-5fa62-default-rtdb.europe-west1.firebasedatabase.app/
const fetchEventByIdEndpoint = '/api/event/f${userId}.json?auth=` +token';


*/
