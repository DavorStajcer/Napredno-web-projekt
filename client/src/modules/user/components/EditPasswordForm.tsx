import { Button, Container, Grid, TextField } from '@mui/material';
import { navigate } from '@reach/router';
import { Routes } from 'fixtures';
import { editPassword, EditPasswordData } from 'modules/user';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const EditPasswordForm: React.FC = () => {
  const { register, handleSubmit } = useForm<EditPasswordData>();
  const dispatch = useDispatch();
  const onSubmit = handleSubmit((data: EditPasswordData) => {
    if (data.newPassword !== data.confirmNewPassword) {
      alert('Confirm new password and new password are not same');
      return;
    }
    const editData: EditPasswordData = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    };
    dispatch(editPassword(editData));
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
          id="newPassword-input"
          label="New Password"
          {...register('newPassword', { required: true })}
          type="password"
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
          id="confirmPassword-input"
          label="Confirm Password"
          {...register('confirmNewPassword', { required: true })}
          type="password"
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
          id="oldPassword-input"
          label="Old password"
          {...register('currentPassword', { required: true })}
          type="password"
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
          color="primary"
          onClick={onSubmit}
          type="submit"
        >
          Edit password
        </Button>
      </Grid>
    </Container>
  );
};
