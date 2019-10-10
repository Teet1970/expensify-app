import React from 'react';
import {shallow} from 'enzyme';
import ExpenseSummary from '../../components/ExpenseSummary';
import selectExpenses from '../../selectors/expenses'; 
import selectExpensesTotal from '../../selectors/expensestotal';
import numeral from 'numeral';


test('should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount = {1} expensesTotal = {235}/>);
    expect(wrapper).toMatchSnapshot();

});

test('should render ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount = {23} expensesTotal = {23512340987} />);
    expect(wrapper).toMatchSnapshot();
 
});



