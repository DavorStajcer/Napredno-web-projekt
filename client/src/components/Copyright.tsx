import { Link, Typography } from '@mui/material';

export const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://www.ferit.unios.hr/2021/">
        FERIT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
