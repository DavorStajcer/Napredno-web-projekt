import { useParams } from '@reach/router';
import { EventData, selectAllEvents } from 'modules/event';
import { getAllAvailableEvents } from 'modules/event/redux/eventActions';
import { useDispatch, useSelector } from 'react-redux';
import { postEvent } from 'modules/event';

export const useEvent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allEvents = useSelector(selectAllEvents);
  const getAllEvents = () => {
    dispatch(getAllAvailableEvents());
  };
  const createEvent = (data: EventData) => {
    dispatch(postEvent(data));
  };

  const eventById = allEvents.find((event) => event.id === (id as string));

  return {
    getAllEvents,
    eventById,
    createEvent,
  };
};
