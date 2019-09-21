import React from 'react';
import { NavLink} from 'react-router-dom';

//{props.match.params.id}
export const ExpenseListItem2 = ({description, amount, createdAt, id}) => (
    <div>
      <NavLink to ={{
        pathname:`/edit/${id}`}}
        >
         <h3>{description}</h3> 
         </NavLink>
      <p>{amount} - {createdAt}</p>
      
    </div>
);
const mapStateToProps =((state) => {
    return {
        expenses: state.expenses,
        filters: state.filters,

    };
});

// export default connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);

export default ExpenseListItem2;
//export default ExpenseListItem2;
