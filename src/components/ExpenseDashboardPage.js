import React from 'react';
import ExpenseList from './expense_list';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage =() => (
    <div>
     <ExpenseList />
     <ExpenseSummary />
     <ExpenseListFilters />
    </div>
);

export default ExpenseDashboardPage ;