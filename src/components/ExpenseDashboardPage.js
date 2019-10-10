import React from 'react';
import ExpenseList from './expense_list';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage =() => (
    <div>
    <ExpenseSummary />
     <ExpenseList />
     <ExpenseListFilters />
    </div>
);

export default ExpenseDashboardPage ;