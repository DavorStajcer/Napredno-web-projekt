import { Grid, Typography, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { selectAvailableEvents, useEvent } from 'modules/event';
import { EventItem } from 'modules/event';
import { useSelector } from 'react-redux';

export const EventList: React.FC = () => {
  const { getAllAvailableEvents } = useEvent();
  useEffect(() => {
    getAllAvailableEvents();
  }, []);
  const availableEvents = useSelector(selectAvailableEvents);

  return (
    <React.Fragment>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          All available events
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Organizations, businesses, and individuals often rely on the services
          of event planners to coordinate conventions, business meetings, trade
          shows, and private parties.
        </Typography>
      </Container>
      <Container sx={{ py: 5, pb: 5 }} maxWidth="md">
        <Grid container spacing={4}>
          {availableEvents.map((event) => (
            <EventItem event={event} key={event._id} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
