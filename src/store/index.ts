import {Patient} from 'src/types';

const patients: Patient[] = [
  {
    id: '1',
    name: 'Anderson Amorim',
    phoneNumber: '21981645003',
    appointments: [{id: '1', date: new Date(), hour: 11}],
  },
  {
    id: '2',
    name: 'Jessica Calegaro',
    phoneNumber: '21981645003',
    appointments: [{id: '1', date: new Date(), hour: 9}],
  },
];

export default patients;
