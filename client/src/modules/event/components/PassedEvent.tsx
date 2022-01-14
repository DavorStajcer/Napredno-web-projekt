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
import { Link, navigate } from '@reach/router';
import { Routes } from 'fixtures';
import { Event } from 'models';
import { deleteEvent, fetchEventById, selectEvent } from 'modules/event';
import { DeleteEventData } from 'modules/event/consts/deleteEventData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  event: Event;
}

export const PassedEvent: React.FC<Props> = ({ event }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const deleteEventData: DeleteEventData = {
      eventId: event._id as string,
    };
    console.log('event data', deleteEventData);
    dispatch(deleteEvent(deleteEventData));
    navigate(Routes.Home);
  };
  return (
    <Grid item key={event._id} xs={12} sm={6}>
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
          image={event.imageUrl}
          alt="random"
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {event.name}
          </Typography>
          <Typography>{event.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
