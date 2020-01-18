import {Appointment} from '../types';

interface CreateAppointmentList {
  initialHour: number;
  finalHour: number;
  date: Date;
}

const normalizeDate = (date: Date, hour: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, 0, 0, 0);

const createAppointmentList = (data: CreateAppointmentList) => {
  const {date, finalHour, initialHour} = data;
  return Array(finalHour - initialHour + 1)
    .fill('')
    .map(
      (_, index): Appointment => {
        return {
          hour: initialHour + index,
          day: date.getDate(),
          month: date.getMonth(),
          year: date.getFullYear(),
          id: String(index),
          date: normalizeDate(date, initialHour + index),
        };
      },
    );
};

export default createAppointmentList;
