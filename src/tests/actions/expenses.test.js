import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123cbd' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123cbd'
  });
});
