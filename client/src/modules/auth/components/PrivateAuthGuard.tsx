import { LinearProgress } from '@mui/material';
import { selectAuthLoading } from 'modules/auth';
import { useSelector } from 'react-redux';

export const PrivateAuthGuard: React.FC = ({ children }) => {
  const authLoading = useSelector(selectAuthLoading);

  if (authLoading) {
    return <LinearProgress color="success" />;
  }

  return <>{children}</>;
};
