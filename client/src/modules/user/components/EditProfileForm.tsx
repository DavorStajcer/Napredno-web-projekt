import { Button, Container, Grid, TextField } from '@mui/material';
import { Link, navigate } from '@reach/router';
import { Routes } from 'fixtures';
import { editUser, EditUserData, selectUser } from 'modules/user';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export const EditProfileForm: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<EditUserData>({
    defaultValues: user,
  });

  const onSubmit = handleSubmit((data: EditUserData) => {
    const editData: EditUserData = {
      email: data.email,
      name: data.name,
      surname: data.surname,
      password: data.password,
    };
    dispatch(editUser(editData));
    navigate(Routes.Profile);
  });
  return (
    <Container maxWidth="md" component="main" sx={{ pt: 5, pb: 5 }}>
      <Grid item xs={12}>
        <TextField
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
          id="name-input"
          label="Name"
          type="text"
          {...register('name')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            mt: 1,
          }}
          id="surname-input"
          {...register('surname')}
          label="Surname"
          type="text"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            mt: 1,
          }}
          id="email-input"
          label="Email address"
          type="text"
          {...register('email')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            mt: 1,
          }}
          id="password-input"
          label="Password"
          type="password"
          {...register('password')}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            mb: 1,
            mt: 1,
          }}
          variant="contained"
          onClick={onSubmit}
          color="primary"
          type="submit"
        >
          Edit user
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Link to={Routes.EditPassword} style={{ textDecoration: 'none' }}>
          <Button
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              mb: 1,
            }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Change password page
          </Button>
        </Link>
      </Grid>
    </Container>
  );
};
