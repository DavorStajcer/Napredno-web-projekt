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
import React, { useEffect } from 'react';
import { Link } from '@reach/router';
import { Routes } from 'fixtures';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'modules/auth';
import {
  fetchAllUsers,
  fetchUserById,
  getById,
  selectAllUsers,
  selectUser,
  useUser,
} from 'modules/user';

export const UserInformation: React.FC = () => {
  //const auth = useSelector(selectAuth);
  //const user = useSelector(selectUser);
  //const allUsers = useSelector(selectAllUsers);
  //const { getUserById } = useUser();
  // const { getAllUsers } = useUser();
  // const userData: FetchUserById = {
  //   token: auth.data.token,
  //   userId: auth.data.userId,
  // };
  // console.log('user data', userData);

  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(fetchUserById(userData));
    // getUserById();
    //dispatch(fetchByIdUser(allUsers, auth));
    //dispatch(getById(auth.data.userId));
    // getAllUsers(auth.data.token);
  }, []);
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
              name surname
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              email
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
