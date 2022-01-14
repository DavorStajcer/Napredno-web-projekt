/* eslint-disable @typescript-eslint/no-unused-vars */
import { LinearProgress } from '@mui/material';
import { selectAuthLoading } from 'modules/auth';
import { selectEventsLoading } from 'modules/event';
import { useSelector } from 'react-redux';

export const PrivateAuthGuard: React.FC = ({ children }) => {
  const authLoading = useSelector(selectAuthLoading);
  const eventsLoading = useSelector(selectEventsLoading);
  if (authLoading) {
    return <LinearProgress color="success" />;
  }

  return <>{children}</>;
};
