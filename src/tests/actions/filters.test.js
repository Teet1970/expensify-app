import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';

test('should generate set start date action object',() => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0),

    });

});

test('should generate set end date action object',() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0),

    });
});


test('should sort object by amount',() => {
    //const action = sortByAmount();
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});

test('should sort object by date',() => {
    //const action = sortByDate();
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

// export const setTextFilter = (text ='') => ({
//     type:'SET_TEXT_FILTER',
//     text
// });

test('should generate set text filter object with text value',() => {
    const text = 'Tere tali!'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    });
});

test('should set text filter object with default values',() => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


