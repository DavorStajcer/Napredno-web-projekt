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

export class Event {
  constructor({
    id,
    name,
    imageUrl,
    date,
    location,
    numberOfSlots,
    description,
    count,
    adminName,
    adminSurname,
    adminId,
  }: Event) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.date = date;
    this.location = location;
    this.numberOfSlots = numberOfSlots;
    this.description = description;
    this.count = count;
    this.adminName = adminName;
    this.adminSurname = adminSurname;
    this.adminId = adminId;
  }
}

export interface AllEvents {
  allEvents: Event[];
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
