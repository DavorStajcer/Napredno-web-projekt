import {
  CssBaseline,
  Grid,
  Typography,
  GlobalStyles,
  Container,
  Button,
} from '@mui/material';
import React from 'react';
import { EventPreview } from 'modules/event';
import { Link } from '@reach/router';
import { Routes } from 'fixtures';

const cards: any[] = [];

export const ReservationList: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      {cards.length !== 0 ? (
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
              {cards.map((card) => (
                <EventPreview card={card} key={card} />
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
