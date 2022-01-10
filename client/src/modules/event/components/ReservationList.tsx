import {
  CssBaseline,
  Grid,
  Typography,
  GlobalStyles,
  Container,
  Button,
} from '@mui/material';
import React, { useEffect } from 'react';
import { EventPreview, selectAllEvents, useEvent } from 'modules/event';
import { Link } from '@reach/router';
import { Routes } from 'fixtures';
import { useSelector } from 'react-redux';

export const ReservationList: React.FC = () => {
  const { getAllEvents } = useEvent();
  const allEvents = useSelector(selectAllEvents);
  useEffect(() => {
    getAllEvents();
  }, []);
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      {allEvents.length !== 0 ? (
        <>
          <Container
            disableGutters
            maxWidth="sm"
            component="main"
            sx={{ pt: 8 }}
          >
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              component="p"
            >
              Events that you have registered yourself
            </Typography>
          </Container>
          <Container sx={{ py: 5, pb: 5 }} maxWidth="md">
            <Grid container spacing={4}>
              {allEvents.map((event) => (
                <EventPreview event={event} key={event.id} />
              ))}
            </Grid>
          </Container>
        </>
      ) : (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8 }}>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            You are not registered to any event yet.
          </Typography>
          <Link to={Routes.Home} style={{ textDecoration: 'none' }}>
            <Button size="large" variant="contained" sx={{ ml: 20, mt: 3 }}>
              Please make a reservation
            </Button>
          </Link>
        </Container>
      )}
    </React.Fragment>
  );
};
