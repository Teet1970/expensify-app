import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseSummary from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary correctly', () => {
    const wrapper = shallow(<ExpenseSummary />);
    expect(wrapper).toMatchSnapshot();

});

