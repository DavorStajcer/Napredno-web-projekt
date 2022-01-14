/* eslint-disable @typescript-eslint/no-unused-vars */
import { navigate, useParams } from '@reach/router';
import { EventData, selectAllEvents } from 'modules/event';
import { getAllFutureEvents } from 'modules/event/redux/eventActions';
import { useDispatch, useSelector } from 'react-redux';
import { postEvent } from 'modules/event';
import { Routes } from 'fixtures';
import { Event } from 'models';

export const useEvent = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectAllEvents);
  const getAllEvents = () => {
    dispatch(getAllFutureEvents());
  };
  const createEvent = (data: EventData) => {
    dispatch(postEvent(data));
    navigate(Routes.Home);
  };
  const getEventById = (eventId: string) => {
    const response = allEvents.find((event) => event._id === eventId) as Event;

    return response;
  };

  return {
    getAllEvents,
    createEvent,
    getEventById,
  };
};
