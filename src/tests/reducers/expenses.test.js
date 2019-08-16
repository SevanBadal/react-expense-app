import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state to empty array', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
test('should add expense with provided values', () => {
  const newExpenseObject = {
    id: '100',
    description: 'Test',
    amount: 8888,
    createdAt: moment(0)
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      ...newExpenseObject
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses.concat(newExpenseObject))
});
test('should edit expense with provided values', () => {
  const updates = {
    description: 'Edit Test',
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates
  };
  const state = expensesReducer(expenses, action);
  const [, secondExpense, thirdExpense] = expenses;
  expect(state).toEqual([{
    id: '1',
    description: 'Edit Test',
    note: '',
    amount: 1000,
    createdAt: 0 // unix epoch
  }, secondExpense, thirdExpense ]);
});
test('should not edit expense not found', () => {
  const updates = {
    description: 'Edit Test',
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '3456',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
