import axios from 'axios';
import { Event } from 'models';

export async function readEvents(): Promise<Event[]> {
  const response = await axios.get(
    'https://event-planner-5fa62-default-rtdb.europe-west1.firebasedatabase.app/events/1.json',
  );

  return response.data.result;
}
