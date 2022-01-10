import { useParams } from '@reach/router';
import { selectAllEvents } from 'modules/event';
import { getAllAvailableEvents } from 'modules/event/redux/eventActions';
import { useDispatch, useSelector } from 'react-redux';

export const useEvent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allEvents = useSelector(selectAllEvents);
  const getAllEvents = () => {
    dispatch(getAllAvailableEvents());
  };

  const eventById = allEvents.find((event) => event.id === (id as string));

  return {
    getAllEvents,
    eventById,
  };
};
