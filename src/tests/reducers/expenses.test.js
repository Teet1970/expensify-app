import expenseReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment'; 

test('should set default state', () => {
  const state = expenseReducers(undefined,{type: '@@INIT'})
  expect(state).toEqual([]);
});

test('should remove expenses by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducers(expenses,action)
    expect(state).toEqual([expenses[0], expenses[2]]);
    });

    test('should not remove expenses if id not found', () => {
        const action = {
            type: 'REMOVE_EXPENSE',
            id: '-1'
        }
        const state = expenseReducers(expenses,action)
        expect(state).toEqual(expenses);
        });

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Fuel card',
        note: '',
        amount: 14500,
        createdAt: moment(0).add(6, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducers(expenses,action)
    expect(state).toEqual([...expenses, expense]);
        });

test('should edit an expense', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expenseReducers(expenses,action);
    expect(state[1].amount).toBe(amount);
        });

test('should not edit an expense if expense not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
        
    const state = expenseReducers(expenses,action);
    expect(state).toEqual(expenses);
                });