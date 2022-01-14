import { Layout } from 'components';
import {
  fetchUserEvents,
  getPassedEvents,
  MyEventsList,
  selectMyEvents,
} from 'modules/event';
import { PrivateAuthGuard } from 'modules/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const MyEvents: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserEvents());
    dispatch(getPassedEvents());
  }, []);
  const myEvents = useSelector(selectMyEvents);
  return (
    <PrivateAuthGuard>
      <Layout>
        <MyEventsList events={myEvents} />
      </Layout>
    </PrivateAuthGuard>
  );
};
