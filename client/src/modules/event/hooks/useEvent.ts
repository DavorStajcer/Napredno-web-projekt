/* eslint-disable @typescript-eslint/no-unused-vars */
import { navigate, useParams } from '@reach/router';
import { EventData, selectAllEvents } from 'modules/event';
import { getAllFutureEvents } from 'modules/event/redux/eventActions';
import { useDispatch, useSelector } from 'react-redux';
import { postEvent } from 'modules/event';
import { Routes } from 'fixtures';

export const useEvent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const allEvents = useSelector(selectAllEvents);
  const getAllEvents = () => {
    dispatch(getAllFutureEvents());
  };
  const createEvent = (data: EventData) => {
    dispatch(postEvent(data));
    navigate(Routes.Home);
  };

  return {
    getAllEvents,
    createEvent,
  };
};
