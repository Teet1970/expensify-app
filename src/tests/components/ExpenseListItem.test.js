import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListItem2} from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem2 {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();

});