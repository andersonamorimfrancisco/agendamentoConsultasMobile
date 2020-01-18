import {Appointment} from '../types';

const checkForAppointmentHour = (hour: number, appointments: Appointment[]) => {
  return appointments.reduce((prev, curr) => {
    if (curr.hour === hour) {
      return true;
    }
    return prev;
  }, false);
};

export default checkForAppointmentHour;
