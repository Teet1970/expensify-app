import React from 'react';
import ExpenseList from './expense_list';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage =() => (
    <div>
     <ExpenseList />
     <ExpenseListFilters />
    </div>
);

export default ExpenseDashboardPage ;