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

interface Props {
  event: Event;
}

export const EventItem: React.FC<Props> = ({ event }) => {
  const { formatDate } = useEvent();
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
          <Button size="small">Register to event</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
