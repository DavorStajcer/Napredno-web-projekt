/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Container, Grid, TextField, Typography } from '@mui/material';

import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState } from 'react';
import { editEventById, EditEventData, useEvent } from 'modules/event';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { navigate } from '@reach/router';
import { Routes } from 'fixtures';

export const EditEventForm: React.FC = () => {
  const { eventById } = useEvent();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<EditEventData>({
    defaultValues: eventById,
  });

  const [dateValue, setDateValue] = useState<Date | null>(
    eventById?.date as Date,
  );

  const onSubmit = handleSubmit((data: EditEventData) => {
    if (dateValue === null) {
      alert('Select date and time');
      return;
    }
    const eventData: EditEventData = {
      name: data.name,
      description: data.description,
      date: dateValue,
      location: data.location,
      maxAttendees: data.maxAttendees,
      eventId: eventById?._id as string,
      token: localStorage.getItem('token') as string,
    };
    console.log('event data', eventData);
    dispatch(editEventById(eventData));
    navigate(Routes.MyEvents);
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
          Edit event
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
          {...register('name', { required: true })}
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
          id="eventDescription-input"
          label="Description"
          type="text"
          {...register('description', { required: true })}
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
          label="Location"
          type="text"
          {...register('location', { required: true })}
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
              setDateValue(newValue as Date);
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
          Edit event
        </Button>
      </Grid>
    </Container>
  );
};
