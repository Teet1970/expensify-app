import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filterReducers(undefined, {type: '@@INIT'});
  expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
  });
});

test('should set sortBy amount', () => {
    const state = filterReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');        
    });

test('should set sortBy date', () => {
    const currenState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    };
    const action = {type: 'SORT_BY_DATE'};

    const state = filterReducers(currenState,action );
    expect(state.sortBy).toEqual('date');        
    });

//should set text filter

test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text};   
    const state = filterReducers(undefined,action);
    expect(state.text).toEqual(text);        
    });

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment().startOf('month')
        };   
    const state = filterReducers(undefined,action);
    expect(state.startDate).toEqual(action.startDate);        
    });

    test('should set endtDate filter', () => {
        const action = {
            type: 'SET_END_DATE',
            startDate: moment().endOf('month')
            };   
        const state = filterReducers(undefined,action);
        expect(state.endDate).toEqual(action.endDate);        
        });


