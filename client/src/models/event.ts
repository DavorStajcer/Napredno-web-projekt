export interface Event {
  id: string;
  imageUrl: string;
  title: string;
  date: Date;
  address: string;
  country: string;
  city: string;
  numberOfSlots: number;
  description: string;
}

export class Event {
  constructor({
    id,
    title,
    imageUrl,
    date,
    address,
    country,
    city,
    numberOfSlots,
    description,
  }: Event) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.date = date;
    this.address = address;
    this.country = country;
    this.city = city;
    this.numberOfSlots = numberOfSlots;
    this.description = description;
  }
}

export interface AllEvents {
  allEvents: Event[];
  loading: boolean;
  error: string | unknown;
}
