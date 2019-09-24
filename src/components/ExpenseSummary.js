import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expensestotal';
import numeral from 'numeral';

const expenseCount = ((props) => (props.expenses.length));

const expenseWord = ((props) => ( props.expenses.length === 1 ? 'expense' : 'expenses'));

export const ExpenseSummary = (props) => (
    //const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    //const FormattedExpensesTotal = numeral(expenseTotal/100).format('$0,0.00');
    
    <div>
      <h3>
      {
        props.expenses.length > 0 
           &&`${expenseCount(props)} ${expenseWord(props)} in sum   
            ${numeral(selectTotalExpenses(props.expenses)/100).format('$0,0.00')}  `                  
        } 
     </h3>   
    </div>
);

const mapStateToProps =((state) => {
    //const visibleExpenses= selectExpenses(state.expenses,state.filters)
    return {
        expenses: selectExpenses(state.expenses,state.filters)
        //expenseCount: visibleExpenses.length
        //expensesTotal: selectExpensesTotal(visibleExpenses)
    };
});

// export default connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);

export default connect(mapStateToProps)(ExpenseSummary);