import { navigate } from '@reach/router';
import { EditEventData, EventData, selectMyEvents } from 'modules/event';
import {
  editEventById,
  fetchUserEvents,
  getAllFutureEvents,
} from 'modules/event/redux/eventActions';
import { useDispatch, useSelector } from 'react-redux';
import { postEvent } from 'modules/event';
import { Routes } from 'fixtures';
import { Event } from 'models';

export const useEvent = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectMyEvents);
  const getAllAvailableEvents = () => {
    dispatch(getAllFutureEvents());
  };
  const getMyEvents = () => {
    dispatch(fetchUserEvents());
  };
  const createEvent = (data: EventData) => {
    dispatch(postEvent(data));
    navigate(Routes.Home);
  };
  const editEvent = (editData: EditEventData) => {
    dispatch(editEventById(editData));
    navigate(Routes.MyEvents);
  };
  const getEventById = (eventId: string) => {
    const response = allEvents.find((event) => event._id === eventId) as Event;
    return response;
  };

  return {
    getAllAvailableEvents,
    createEvent,
    getEventById,
    getMyEvents,
    editEvent,
  };
};
