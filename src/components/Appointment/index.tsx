import React from 'react';
import * as Styles from './styles';
import {Patient} from 'src/types';

interface AppointmentProps {
  date: Date;
  hour: number;
  patient?: Patient;
  fixedPatient?: Patient;
}

const normalizeHour = (hour: number) =>
  hour > 9 ? `${hour}:00` : `0${hour}:00`;

const normalizePatient = (patient: Patient | null) =>
  patient ? patient.name : '';

const Appointment = ({hour, patient}: AppointmentProps) => (
  <Styles.container>
    <Styles.Body>
      <Styles.Hour>{normalizeHour(hour)}</Styles.Hour>
      <Styles.Patient>
        <Styles.PatientName>{normalizePatient(patient)}</Styles.PatientName>
      </Styles.Patient>
    </Styles.Body>
  </Styles.container>
);

export default Appointment;
