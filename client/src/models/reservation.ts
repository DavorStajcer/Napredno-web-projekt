import { Event } from 'models';

export interface Reservation {
  id: string;
  event: Event;
}

export class Reservation {
  constructor({ id, event }: Reservation) {
    this.id = id;
    this.event = event;
  }
}

export interface AllReservations {
  allReservations: Reservation[];
  loading: boolean;
  error: string | unknown;
}
