export interface EventData {
  name: string;
  description: string;
  imageUrl: string;
  location: string;
  date: Date;
  token?: string;
  maxAttendees: number;
}
