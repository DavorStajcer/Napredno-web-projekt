import { Button, Container, Grid, TextField, Typography } from '@mui/material';

import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState } from 'react';

const defaultValues = {
  eventName: '',
  eventDescription: '',
  eventLocation: '',
  imageUrl: '',
  max: 0,
  date: new Date(),
};
export const CreateEventForm: React.FC = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [dateValue, setDateValue] = useState<Date | null>(new Date());
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({ ...formValues, date: dateValue });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="md" component="main" sx={{ pt: 5, pb: 5 }}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            Create new event
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              mt: 2,
            }}
            id="eventName-input"
            name="eventName"
            label="Name"
            type="text"
            value={formValues.eventName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              mt: 2,
            }}
            id="eventDescription-input"
            name="eventDescription"
            label="Description"
            type="text"
            value={formValues.eventDescription}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              mt: 2,
            }}
            id="eventLocation-input"
            name="eventLocation"
            label="Location"
            type="text"
            value={formValues.eventLocation}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              mt: 2,
            }}
            id="imageUrl-input"
            name="imageUrl"
            label="Image URL"
            type="text"
            value={formValues.imageUrl}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              mt: 2,
              mb: 2,
            }}
            id="max-input"
            name="max"
            label="Max number of people"
            type="number"
            value={formValues.max}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DateTimePicker
              renderInput={(props) => (
                <TextField
                  sx={{
                    width: '100%',
                  }}
                  {...props}
                />
              )}
              label="DateTimePicker"
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
            />
          </LocalizationProvider>
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
      </Container>
    </form>
  );
};
