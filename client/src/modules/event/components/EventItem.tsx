import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  GlobalStyles,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useEvent } from 'modules/event';

export const EventItem: React.FC = () => {
  const { eventById } = useEvent();

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <Container maxWidth="md" component="main" sx={{ pt: 5, pb: 5 }}>
        <Grid item xs={12}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              height="300"
              component="img"
              image={eventById?.imageUrl}
              alt="random"
            />

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {eventById?.name}
              </Typography>
              <Typography gutterBottom variant="h6">
                {eventById?.date}
              </Typography>
              <Typography gutterBottom variant="h6">
                {eventById?.location}
              </Typography>
              <Typography gutterBottom>{eventById?.description}</Typography>

              <Typography gutterBottom>{eventById?.numberOfSlots}</Typography>
              <Typography>{eventById?.count}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Register to event</Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
