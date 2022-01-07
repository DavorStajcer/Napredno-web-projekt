import { Button, CssBaseline, Box, Typography, Container } from '@mui/material';
import { navigate } from '@reach/router';
import { Copyright } from 'components';

export const Error: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          ERROR 404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'We could not find page you were looking for.'}
          {'Use the button below to go back where you came from'}
        </Typography>
        <Button onClick={() => navigate(-1)}>BACK</Button>
      </Container>
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
    </Box>
  );
};
