import { Box, Container, Typography } from '@mui/material';
import { Copyright } from 'components';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[300]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">Event Planner</Typography>
        <Copyright />
      </Container>
    </Box>
  );
};
