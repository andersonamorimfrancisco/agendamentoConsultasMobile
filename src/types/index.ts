export interface Appointment {
  id: string;
  hour: number;
  day: number;
  month: number;
  year: number;
  date: Date;
}

export interface Patient {
  id: string;
  name: string;
  phoneNumber: string;
  appointments: Appointment[];
}
