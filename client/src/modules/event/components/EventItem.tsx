import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Event } from 'models';
import { useEvent } from 'modules/event';
import { useReservation } from 'modules/reservation';

interface Props {
  event: Event;
}

export const EventItem: React.FC<Props> = ({ event }) => {
  const { formatDate } = useEvent();
  const { createReservation } = useReservation();
  const handleReservation = () => {
    createReservation(event._id);
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
          image={event.imageUrl}
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
            {formatDate(event.date)}
          </Typography>
          <Typography gutterBottom>{event?.description}</Typography>

          <Typography gutterBottom>{event?.maxAttendees}</Typography>
          <Typography>{event?.count}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleReservation}>
            Register to event
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
