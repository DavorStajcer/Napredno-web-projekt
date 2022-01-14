interface eventData {
  name: string;
  description: string;
  location: string;
  date: Date;
  maxAttendees: number;
  count: number;
  adminId: string;
  imageUrl: string;
}

interface adminData {
  email: string;
  name: string;
  surname: string;
}
export interface Reservation {
  _id: string;
  userId: string;
  eventId: string;
  eventData: eventData;
  adminData: adminData;
}

export class Reservation {
  constructor({ _id, userId, eventId, eventData, adminData }: Reservation) {
    this._id = _id;
    this.userId = userId;
    this.eventId = eventId;
    this.eventData = eventData;
    this.adminData = adminData;
  }
}

export interface AllReservations {
  allReservations: Reservation[];
  confirmation: string;
  message: string;
  loading: boolean;
  error: string | unknown;
}
