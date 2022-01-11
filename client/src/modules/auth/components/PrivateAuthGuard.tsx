import { LinearProgress } from '@mui/material';
import { navigate } from '@reach/router';
import { Routes } from 'fixtures';
import { selectAuthLoading } from 'modules/auth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const PrivateAuthGuard: React.FC = ({ children }) => {
  const userId = localStorage.getItem('userId');
  const authLoading = useSelector(selectAuthLoading);
  useEffect(() => {
    if (userId === null) {
      navigate(Routes.Login);
    }
  }, []);

  if (authLoading) {
    return <LinearProgress color="success" />;
  }

  return <>{children}</>;
};
