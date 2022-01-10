import { Button, Container, Grid, TextField } from '@mui/material';
import { useState } from 'react';

const defaultValues = {
  newPassword: '',
  confirmPassword: '',
  oldPassword: '',
};
export const EditPasswordForm: React.FC = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="md" component="main" sx={{ pt: 5, pb: 5 }}>
        <Grid item xs={12}>
          <TextField
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
            id="newPassword-input"
            name="newPassword"
            label="New Password"
            type="password"
            value={formValues.newPassword}
            onChange={handleInputChange}
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
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
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
            name="oldPassword"
            label="Old password"
            type="password"
            value={formValues.oldPassword}
            onChange={handleInputChange}
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
            type="submit"
          >
            Edit password
          </Button>
        </Grid>
      </Container>
    </form>
  );
};
