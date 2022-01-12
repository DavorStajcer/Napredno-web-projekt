export interface Event {
  _id: string;
  imageUrl: string;
  name: string;
  description: string;
  date: Date;
  location: string;
  maxAttendees: number;
  count: number;
  userName: string;
  userSurname: string;
  userEmail: string;
  adminId: string;
}

export class Event {
  constructor({
    _id,
    name,
    imageUrl,
    date,
    location,
    maxAttendees,
    description,
    count,
    userName,
    userSurname,
    userEmail,
    adminId,
  }: Event) {
    this._id = _id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.date = date;
    this.location = location;
    this.maxAttendees = maxAttendees;
    this.description = description;
    this.count = count;
    this.userName = userName;
    this.userSurname = userSurname;
    this.userEmail = userEmail;
    this.adminId = adminId;
  }
}

export interface AllEvents {
  allEvents: Event[];
  futureEvents: Event[];
  passedEvents: Event[];
  loading: boolean;
  error: string | unknown;
}

/*
export interface Event {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  date: Date;
  location: string;
  numberOfSlots: number;
  count: number;
  adminName: string;
  adminSurname: string;
  adminId: string;
}
*/
