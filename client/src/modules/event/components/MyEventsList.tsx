import {
  CssBaseline,
  Grid,
  Typography,
  GlobalStyles,
  Container,
} from '@mui/material';
import React from 'react';
import { FutureEventPreview, PassedEventPreview } from 'modules/event';

const cards: any[] = [1, 2, 3];

export const MyEventsList: React.FC = () => {
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
          {cards.map((card) => (
            <PassedEventPreview card={card} key={card} />
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
          {cards.map((card) => (
            <FutureEventPreview card={card} key={card} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
