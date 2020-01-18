import React, {useState} from 'react';
import patients from '../../store';
import Appointment from '../../components/Appointment';
import utils from '../../utils';
import * as Styles from './styles';

interface MainProps {}

const Main = ({}: MainProps) => (
  <Styles.container>
    <Styles.List>
      {utils
        .createAppointmentList({
          date: new Date(),
          initialHour: 8,
          finalHour: 21,
        })
        .map(item => (
          <Appointment
            key={item.hour}
            hour={item.hour}
            date={item.date}
            patient={utils.getPatientInHour(patients, item)}
            fixedPatient={undefined}
          />
        ))}
    </Styles.List>
  </Styles.container>
);

export default Main;
