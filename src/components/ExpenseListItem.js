import React from 'react';
import { NavLink} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//{props.match.params.id}
export const ExpenseListItem2 = ({description, amount, createdAt, id}) => (
    <div>
      <NavLink to ={{
        pathname:`/edit/${id}`}}
        >
         <h3>{description}</h3> 
         </NavLink>
      <p>
      {numeral(amount/100).format('$0,0.00')} 
      - 
      {moment(createdAt).format('MMMM Do,YYYY')}
      </p>
      
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
