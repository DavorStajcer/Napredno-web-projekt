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
  fetchEventById,
  fetchUserEvents,
  getPassedEvents,
  PassedEventPreview,
  selectAllEvents,
  selectPassedEvents,
  useEvent,
} from 'modules/event';
import { useDispatch, useSelector } from 'react-redux';
import { FutureEvent } from 'modules/event/components/FutureEvent';
import { Event } from 'models';

const cards: any[] = [1, 2, 3];
interface Props {
  events: Event[];
}

export const MyEventsList: React.FC<Props> = ({ events }) => {
  const passedEvents = useSelector(selectPassedEvents);

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
          {events.map((event) => (
            <FutureEvent event={event} key={event._id} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
