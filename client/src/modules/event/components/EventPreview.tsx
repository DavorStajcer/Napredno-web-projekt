/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from '@reach/router';
import { Event } from 'models';
import { fetchEventById, selectEvent } from 'modules/event';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  event: Event;
}

export const EventPreview: React.FC<Props> = ({ event }) => {
  // const eventData = useSelector(selectEvent);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchEventById(event._id));
  // }, []);
  console.log('Event name', event.name);
  return (
    <Grid item key={event._id} xs={12} sm={6}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link to={`/event/${event._id}`}>
          <CardMedia
            height="300"
            component="img"
            image={event.imageUrl}
            alt="random"
          />
        </Link>

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {event.name}
          </Typography>
          <Typography>{event.description}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/event/${event._id}`} style={{ textDecoration: 'none' }}>
            <Button size="small">View</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
