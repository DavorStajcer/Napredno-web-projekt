import { Button, Container, Grid, TextField } from '@mui/material';
import { Link } from '@reach/router';
import { Routes } from 'fixtures';
import { useState } from 'react';

const defaultValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
};
export const EditProfileForm: React.FC = () => {
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
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
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
            id="surname-input"
            name="surname"
            label="Surname"
            type="text"
            value={formValues.surname}
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
            id="email-input"
            name="email"
            label="Email address"
            type="text"
            value={formValues.email}
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
            id="password-input"
            name="password"
            label="Password"
            type="password"
            value={formValues.password}
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
              Change password
            </Button>
          </Link>
        </Grid>
      </Container>
    </form>
  );
};
