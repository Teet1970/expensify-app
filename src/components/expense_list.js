import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem2 from './ExpenseListItem';

export const ExpenseList = (props) => (
    <div>
      {
        props.expenses.length ===0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense)=>{
                return <ExpenseListItem2 key = {expense.id} {...expense}/>
            })
        ) 
      }      
      
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