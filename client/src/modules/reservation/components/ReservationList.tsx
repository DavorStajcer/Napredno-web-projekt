/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  CssBaseline,
  Grid,
  Typography,
  GlobalStyles,
  Container,
  Button,
} from '@mui/material';
import React, { useEffect } from 'react';
import { EventPreview, selectMyEvents, useEvent } from 'modules/event';
import { Link } from '@reach/router';
import { Routes } from 'fixtures';
import { useSelector } from 'react-redux';
import {
  ReservationItem,
  selectMyReservations,
  useReservation,
} from 'modules/reservation';

export const ReservationList: React.FC = () => {
  const allEvents = useSelector(selectMyEvents);
  const allReservations = useSelector(selectMyReservations);

  const { getMyReservations } = useReservation();
  useEffect(() => {
    getMyReservations();
  }, []);
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      {allReservations.length !== 0 ? (
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
              {allReservations.map((event) => (
                <ReservationItem event={event} key={event._id} />
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
