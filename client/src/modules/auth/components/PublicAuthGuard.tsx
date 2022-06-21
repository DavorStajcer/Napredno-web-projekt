import { LinearProgress } from '@mui/material';
import { navigate } from '@reach/router';
import { selectAuthLoading } from 'modules/auth';
import { Routes } from 'fixtures';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const PublicAuthGuard: React.FC = ({ children }) => {
  const token = localStorage.getItem('token');

  const authLoading = useSelector(selectAuthLoading);
  useEffect(() => {
    console.log('izvrsit');
    if (token !== null) {
      navigate(Routes.Home);
    }
  }, []);

  if (authLoading) {
    return <LinearProgress color="success" />;
  }

  return <>{children}</>;
};
