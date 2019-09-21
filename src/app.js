import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
  
// store.subscribe(() =>{
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
//     console.log(visibleExpenses);
// });

// store.dispatch(addExpense({description:'Water bill', amount:100, createdAt: 1000}));
// store.dispatch(addExpense({description:'Gas bill', amount:300, createdAt:-1000}));
// store.dispatch(addExpense({description:'Heat bill', amount:1000, createdAt: 500}));
//store.dispatch(setTextFilter('water'));
//store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// },3000)





// const Layout = (props) => {
//     return(
//         <div>
//           <p>header</p>
//           {props.children}
//           <p>footer</p>
//         </div>
//     );
// }

// ReactDOM.render((<Layout>
//                    <div>
//                      <h1>Page title</h1>
//                      <p>This is my page!</p>
//                    </div>
//                 </Layout>
//                 ), document.getElementById('app'));

// class OldSyntax {
//     constructor(){
//         this.name = 'Mike';
//         this.getGreeting= this.getGreeting.bind(this);
//     }
//     getGreeting(){
//         return `Hei! Minu nimi on ${this.name}!`;}
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//     nimi = 'Jenny';
//     getGreeting2 = () => {
//         return `Hei! Minu nimi on ${this.nimi}!`;
//     }
//   }


// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting2;
// console.log(newGetGreeting());