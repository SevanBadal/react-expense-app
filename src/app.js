import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);
const AddExpensePage = () => (
  <div>This is from my add expense page</div>
);
const EditExpensePage = () => (
  <div>This is from my edit expense page</div>
);
const HelpPage = () => (
  <div>This is from my help expense page</div>
);
const NotFound = () => (
  <div>404!</div>
);
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} exact={true} />
      <Route path="/edit" component={EditExpensePage} exact={true} />
      <Route path="/help" component={HelpPage} exact={true} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));
