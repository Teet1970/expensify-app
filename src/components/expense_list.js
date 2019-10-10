import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem2 from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import expensestotals from '../selectors/expensestotal';


export const ExpenseList = (props) => (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {
          props.expenses.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No expenses</span>
            </div>
          ) : (
              props.expenses.map((expense) => {
                return <ExpenseListItem2 key={expense.id} {...expense} />;
              })
            )
        }
      </div>
    </div>
  );

const mapStateToProps =((state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
});

// export default connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);

export default connect(mapStateToProps)(ExpenseList);