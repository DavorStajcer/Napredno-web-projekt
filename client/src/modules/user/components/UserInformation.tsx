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
import { useSelector } from 'react-redux';
import { selectUser } from 'modules/user';

export const UserInformation: React.FC = () => {
  const user = useSelector(selectUser);
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
              {user.name} {user.surname}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {user.email}
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
