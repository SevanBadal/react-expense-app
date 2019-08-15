// export a stateless functional component
  // description, amount, createdAt
import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>Description: {description}</h3>
    <p>Amount: {amount} - Created At: {createdAt}</p>
  </div>
);

export default ExpenseListItem;
