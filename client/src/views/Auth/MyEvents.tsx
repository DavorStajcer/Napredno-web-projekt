import { Layout } from 'components';
import { MyEventsList, selectAllEvents, useEvent } from 'modules/event';
import { PrivateAuthGuard } from 'modules/auth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const MyEvents: React.FC = () => {
  const { getAllEvents } = useEvent();
  useEffect(() => {
    getAllEvents();
  }, []);
  const allEvents = useSelector(selectAllEvents);
  return (
    <PrivateAuthGuard>
      <Layout>
        <MyEventsList events={allEvents} />
      </Layout>
    </PrivateAuthGuard>
  );
};
