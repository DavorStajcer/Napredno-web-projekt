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

interface Props {
  event: Event;
}

export const EventPreview: React.FC<Props> = ({ event }) => {
  return (
    <Grid item key={event.id} xs={12} sm={6}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link to={`/event/${event.id}`}>
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
          <Link to="/event/dadsadas" style={{ textDecoration: 'none' }}>
            <Button size="small">View</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
