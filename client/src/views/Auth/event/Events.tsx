import { EventList, selectAllEvents, useEvent } from 'modules/event';
import { Layout } from 'components';
import { PrivateAuthGuard } from 'modules/auth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Events: React.FC = () => {
  const { getAllEvents } = useEvent();
  useEffect(() => {
    getAllEvents();
  }, []);
  const allEvents = useSelector(selectAllEvents);
  return (
    <PrivateAuthGuard>
      <Layout>
        <EventList events={allEvents} />
      </Layout>
    </PrivateAuthGuard>
  );
};
