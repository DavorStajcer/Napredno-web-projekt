import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState } from 'react';
import { EventData, useEvent } from 'modules/event';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectAuth } from 'modules/auth';

export const CreateEventForm: React.FC = () => {
  const { register, handleSubmit } = useForm<EventData>();
  const { createEvent } = useEvent();
  const auth = useSelector(selectAuth);
  const [dateValue, setDateValue] = useState<Date | null>(new Date());
  const onSubmit = handleSubmit((data: EventData) => {
    if (dateValue === null) {
      alert('Select date and time');
      return;
    }
    const eventData: EventData = {
      name: data.name,
      description: data.description,
      date: dateValue,
      imageUrl: data.imageUrl,
      location: data.location,
      maxAttendees: data.maxAttendees,
      token: auth.data.token,
    };
    console.log('event data', eventData);
    createEvent(eventData);
  });

  return (
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
          label="Name"
          type="text"
          {...register('name', { required: true })}
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
          {...register('description', { required: true })}
          label="Description"
          type="text"
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
          {...register('location', { required: true })}
          label="Location"
          type="text"
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
          {...register('imageUrl', { required: true })}
          id="imageUrl-input"
          label="Image URL"
          type="text"
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
          label="Max number of people"
          type="number"
          {...register('maxAttendees', { required: true })}
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
          onClick={onSubmit}
          color="primary"
          type="submit"
        >
          Create event
        </Button>
      </Grid>
    </Container>
  );
};
