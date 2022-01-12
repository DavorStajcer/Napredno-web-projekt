/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Container, Grid, TextField, Typography } from '@mui/material';

import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState } from 'react';
import { EditEventData, useEvent } from 'modules/event';

export const EditEventForm: React.FC = () => {
  const { eventById } = useEvent();
  const event: EditEventData = {
    date: eventById?.date as Date,
    description: eventById?.description as string,
    eventId: eventById?._id as string,
    location: eventById?.location as string,
    name: eventById?.name as string,
    maxAttendees: eventById?.maxAttendees as number,
  };
  const [formValues, setFormValues] = useState(event);
  const [dateValue, setDateValue] = useState<Date | null>(new Date());
  console.log('form values', formValues);
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
            type="text"
            value={event.name}
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
            label="Description"
            type="text"
            value={event.description}
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
            label="Location"
            type="text"
            value={event.location}
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
            label="Max number of people"
            type="number"
            value={event.maxAttendees}
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
              value={event.date}
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
            Edit event
          </Button>
        </Grid>
      </Container>
    </form>
  );
};
