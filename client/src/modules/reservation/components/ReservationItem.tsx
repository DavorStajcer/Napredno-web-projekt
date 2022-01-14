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
import { navigate } from '@reach/router';
import { Routes } from 'fixtures';
import { Event, Reservation } from 'models';
import { useEvent } from 'modules/event';
import { deleteReservation, useReservation } from 'modules/reservation';
import { useDispatch } from 'react-redux';

interface Props {
  event: Reservation;
}

export const ReservationItem: React.FC<Props> = ({ event }) => {
  const { formatDate } = useEvent();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteReservation(event._id));
    navigate(Routes.Home);
  };
  return (
    <Grid item xs={12} sm={6}>
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
          image={event.eventData.imageUrl}
          alt="random"
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {event.eventData.name}
          </Typography>
          <Typography gutterBottom variant="h6">
            {event.eventData.location}
          </Typography>
          <Typography gutterBottom variant="h6">
            {formatDate(event.eventData.date)}
          </Typography>
          <Typography gutterBottom>{event?.eventData.location}</Typography>

          <Typography gutterBottom>{event.eventData.maxAttendees}</Typography>
          <Typography>{event?.eventData.count}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDelete}>
            Delete registration
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
