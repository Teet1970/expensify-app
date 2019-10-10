// import 'react-dates/initialize';
// import 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';


test('shoult render ExpenseDashboardPage correctly', ()=> {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
    
});