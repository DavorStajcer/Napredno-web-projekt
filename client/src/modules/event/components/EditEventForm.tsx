import { Button, Container, Grid, TextField, Typography } from '@mui/material';

import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState } from 'react';
import { EditEventData, selectMyEvents, useEvent } from 'modules/event';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from '@reach/router';

export const EditEventForm: React.FC = () => {
  const params = useParams();
  const { editEvent } = useEvent();

  const myEvents = useSelector(selectMyEvents);
  const event = myEvents.find((event) => event._id === (params.id as string));
  const [dateValue, setDateValue] = useState<Date | null>(event?.date as Date);
  const { register, handleSubmit } = useForm<EditEventData>({
    defaultValues: event,
  });
  const onSubmit = handleSubmit((data: EditEventData) => {
    if (dateValue === null) {
      alert('Select date and time');
      return;
    }
    const editData: EditEventData = {
      description: data.description,
      location: data.location,
      name: data.name,
      maxAttendees: data.maxAttendees,
      date: dateValue,
      eventId: event?._id as string,
    };
    editEvent(editData);
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
