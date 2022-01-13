/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CssBaseline,
  Grid,
  Typography,
  GlobalStyles,
  Container,
} from '@mui/material';
import React, { useEffect } from 'react';
import {
  EventPreview,
  fetchUserEvents,
  getPassedEvents,
  PassedEventPreview,
  selectAllEvents,
  selectPassedEvents,
  useEvent,
} from 'modules/event';
import { useDispatch, useSelector } from 'react-redux';
import { FutureEvent } from 'modules/event/components/FutureEvent';

const cards: any[] = [1, 2, 3];

export const MyEventsList: React.FC = () => {
  const dispatch = useDispatch();
  const passedEvents = useSelector(selectPassedEvents);
  const token = localStorage.getItem('token');
  const { getAllEvents } = useEvent();
  const allEvents = useSelector(selectAllEvents);
  useEffect(() => {
    getAllEvents();

    // dispatch(getPassedEvents());
    // console.log('Sending token to fetch user events', token);
    // dispatch(fetchUserEvents(token as string));
  }, []);
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
      {passedEvents.length !== 0 ? (
        <Container sx={{ py: 5, pb: 5 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <PassedEventPreview card={card} key={card} />
            ))}
          </Grid>
        </Container>
      ) : (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8 }}>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            You do not have any passed event yet
          </Typography>
        </Container>
      )}

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
          {allEvents.map((event) => (
            <FutureEvent event={event} key={event._id} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
