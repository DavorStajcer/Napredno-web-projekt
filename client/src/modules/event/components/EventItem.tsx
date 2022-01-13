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
import React, { useEffect } from 'react';
import { fetchEventById, selectEvent } from 'modules/event';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from '@reach/router';

export const EventItem: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const event = useSelector(selectEvent);
  useEffect(() => {
    dispatch(fetchEventById(id as string));
  }, []);
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
              image={event?.imageUrl}
              alt="random"
            />

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {event?.name}
              </Typography>
              <Typography gutterBottom variant="h6">
                {event?.location}
              </Typography>
              <Typography gutterBottom variant="h6">
                {event?.date}
              </Typography>
              <Typography gutterBottom>{event?.description}</Typography>

              <Typography gutterBottom>{event?.maxAttendees}</Typography>
              <Typography>{event?.count}</Typography>
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
