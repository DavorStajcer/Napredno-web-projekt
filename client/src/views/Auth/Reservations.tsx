import { Layout } from 'components';
import { ReservationList } from 'modules/event';

export const Reservations: React.FC = () => {
  return (
    <Layout>
      <ReservationList />
    </Layout>
  );
};
