import moment from 'moment';

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 1000,
  createdAt: 0 // unix epoch
}, {
  id: '2',
  description: 'Rend',
  note: '',
  amount: 3445,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 45,
  createdAt: moment(0).add(4, 'days').valueOf()
}];
