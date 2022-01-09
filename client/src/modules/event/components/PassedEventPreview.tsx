import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

interface Props {
  card: number;
}

export const PassedEventPreview: React.FC<Props> = ({ card }) => {
  return (
    <Grid item key={card} xs={12} sm={6}>
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
          image="https://source.unsplash.com/random"
          alt="random"
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Event name
          </Typography>
          <Typography>
            This is a event description. You can use this section to describe
            the content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
