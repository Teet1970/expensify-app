import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase, googleAuthProvider} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
//import firebase from 'firebase/app';
//import 'firebase/auth';
//import createHistory from 'history/createBrowserHistory';
//import './playground/promises'

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

// import 'react-dates/initialize';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import AppRouter, {history} from './routers/AppRouter';
// import configureStore from './store/configureStore';
// import { startSetExpenses } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';
// import 'react-dates/lib/css/_datepicker.css';
// import { firebase } from './firebase/firebase';

// const store = configureStore();

// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// store.dispatch(startSetExpenses()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('app'));
// });

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log('log in');
//   } else {
//     console.log('log out');
//   }
// });
  
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