import {Patient, Appointment} from 'src/types';
import checkForAppointmentHour from './checkForAppointmentHour';

const getPatientInHour = (patients: Patient[], appointment: Appointment) => {
  const filtredPatient = patients.filter(patient =>
    checkForAppointmentHour(appointment.hour, patient.appointments),
  );
  if (filtredPatient.length > 0) {
    return filtredPatient.reduce((prev, curr) => curr);
  }
  return undefined;
};

export default getPatientInHour;
