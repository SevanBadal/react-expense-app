import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // provides store for all components
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setEndDate, setStartDate, sortByAmount, sortByDate, setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({description: 'water bill', amount: 200}));
store.dispatch(addExpense({ description: 'gas bill', amount: 543, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'electric bill', amount: 54113 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
