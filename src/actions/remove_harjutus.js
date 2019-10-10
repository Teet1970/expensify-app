
export const removeExpense =({id}={}) =>({
    type: 'REMOVE_EXPENSE',
    id
});
export const startRemoveExpense = ({id}={}) => {
    return (dispatch) => {
      const {
        description='',
        note = '', 
        amount = 0, 
        createdAt=0
      } = expenseData;
      const expense = { description, note, amount, createdAt};

      return database.ref('expenses').push(expense).then((ref) =>{
          dispatch(removeExpense({
              id: ref.key,
              ...expense
          }));
      });
    };
};