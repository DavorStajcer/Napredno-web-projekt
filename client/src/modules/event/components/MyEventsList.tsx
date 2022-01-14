import {
  CssBaseline,
  Grid,
  Typography,
  GlobalStyles,
  Container,
} from '@mui/material';
import React, { useEffect } from 'react';
import {
  selectPassedEvents,
  useEvent,
  selectFutureEvents,
  PassedEvent,
} from 'modules/event';
import { useSelector } from 'react-redux';
import { FutureEvent } from 'modules/event/components/FutureEvent';

export const MyEventsList: React.FC = () => {
  const { getMyEvents } = useEvent();
  useEffect(() => {
    getMyEvents();
  }, []);
  const passedEvents = useSelector(selectPassedEvents);
  const futureEvents = useSelector(selectFutureEvents);

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8 }}>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Passed events
        </Typography>
      </Container>

      <Container sx={{ py: 5, pb: 5 }} maxWidth="md">
        <Grid container spacing={4}>
          {passedEvents.map((event) => (
            <PassedEvent event={event} key={event._id} />
          ))}
        </Grid>
      </Container>

      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8 }}>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Future events
        </Typography>
      </Container>
      <Container sx={{ py: 5, pb: 5 }} maxWidth="md">
        <Grid container spacing={4}>
          {futureEvents.map((event) => (
            <FutureEvent event={event} key={event._id} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
