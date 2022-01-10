/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from '@reach/router';
import { Routes } from 'fixtures';

export const UserInformation: React.FC = () => {
  return (
    <Container maxWidth="md" component="main" sx={{ pt: 5, pb: 5 }}>
      <Grid item xs={12}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h4" component="h2">
              User name and user surname
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              User email
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={Routes.EditProfile} style={{ textDecoration: 'none' }}>
              <Button size="small">Edit user</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};
