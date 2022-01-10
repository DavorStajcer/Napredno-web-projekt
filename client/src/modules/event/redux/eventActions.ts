import { AppDispatch, AppThunk } from 'modules/redux-store';
import {
  fetchAllEventsPending,
  fetchAllEventsFulfilled,
  fetchAllEventsRejected,
} from 'modules/event';
import axios from 'axios';
import { Event } from 'models';

const client = axios.create({
  baseURL:
    'https://event-planner-5fa62-default-rtdb.europe-west1.firebasedatabase.app',
});
const allEventsEndPoint = '/allEvents.json';

export const getAllAvailableEvents =
  (): AppThunk => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchAllEventsPending());
      const response = await client.get(allEventsEndPoint);
      const data: Event[] = response.data;
      dispatch(fetchAllEventsFulfilled(data));
    } catch (error) {
      dispatch(fetchAllEventsRejected(error));
    }
  };
