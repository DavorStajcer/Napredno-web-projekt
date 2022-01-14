import { EventData, EditEventData } from 'modules/event';
import { API } from 'fixtures';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { DeleteEventData } from 'modules/event/consts/deleteEventData';
import { Event } from 'models';

const fetchEventByIdEndpoint = '/api/event/fetch-one';
const fetchAllFutureEvents = '/api/event/fetch-all';
const createEventEndpoint = '/api/event/create';
const editEventEndpoint = '/api/event/edit';
const deleteEventEndpoint = '/api/event/delete';
const fetchUsersEventsEndpoint = '/api/event/fetch-users';

export const fetchEventById = createAsyncThunk(
  'event/fetchEventById',
  async (eventId: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await API.post(
        fetchEventByIdEndpoint,
        { eventId },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const data = response.data.data.event;

      return data as Event;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

export const postEvent = createAsyncThunk(
  'event/postEvent',
  async (event: EventData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await API.post(createEventEndpoint, event, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      return data;
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
      const returnData = {
        confirmation: data.confirmation as string,
        message: data.message as string,
        allEvents: data.data.events as Event[],
      };

      return returnData;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);

export const editEventById = createAsyncThunk(
  'event/editEventById',
  async (eventData: EditEventData) => {
    try {
      const token = localStorage.getItem('token') as string;
      const response = await API.post(editEventEndpoint, eventData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;

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
      const token = localStorage.getItem('token') as string;
      const response = await API.post(
        deleteEventEndpoint,
        { eventId: eventData.eventId },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const data = response.data;

      return data;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);
export const fetchUserEvents = createAsyncThunk(
  'event/fetchUserEvents',
  async () => {
    try {
      const token = localStorage.getItem('token') as string;
      console.log('sending token', token);

      const response = await API.post(
        fetchUsersEventsEndpoint,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const data = response.data;
      const returnData = {
        confirmation: data.confirmation as string,
        message: data.message as string,
        allEvents: data.data.events as Event[],
      };

      return returnData;
    } catch (error) {
      throw new Error('didnt send event');
    }
  },
);
