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
import { Link } from '@reach/router';
import React from 'react';

export const EventItem: React.FC = () => {
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
              width: '100%',
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
              <Typography gutterBottom variant="h6">
                Event date
              </Typography>
              <Typography gutterBottom variant="h6">
                Event location
              </Typography>
              <Typography gutterBottom>
                This is a event description. You can use this section to
                describe the content.
              </Typography>

              <Typography gutterBottom>Max number of slots</Typography>
              <Typography>Count</Typography>
            </CardContent>
            <CardActions>
              <Link to="/event/dadsadas" style={{ textDecoration: 'none' }}>
                <Button size="small">Register to event</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
