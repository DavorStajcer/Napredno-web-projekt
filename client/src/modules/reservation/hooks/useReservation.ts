import { fetchUserReservations, postReservation } from 'modules/reservation';
import { useDispatch } from 'react-redux';

export const useReservation = () => {
  const dispatch = useDispatch();
  const createReservation = (eventId: string) => {
    dispatch(postReservation(eventId));
  };
  const getMyReservations = () => {
    dispatch(fetchUserReservations());
  };

  return {
    createReservation,
    getMyReservations,
  };
};
