import {
  CssBaseline,
  Grid,
  Typography,
  GlobalStyles,
  Container,
} from '@mui/material';
import React from 'react';
import { EventPreview } from 'modules/event';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const EventList: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
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
          {cards.map((card) => (
            <EventPreview card={card} key={card} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
