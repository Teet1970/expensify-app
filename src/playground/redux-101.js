import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy  
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
    //incrementBy: typeof incrementBy==='number'? incrementBy : 1   
});

const setCount = ({count}) => ({
//const setSet = ({count}) => 
    type: 'SET',
    count
    //incrementBy: typeof incrementBy==='number'? incrementBy : 1   
});

const resetCount = () => ({
    type: 'RESET'
    //incrementBy: typeof incrementBy==='number'? incrementBy : 1   
});

const countReducer= (state= {count: 0}, action) => {
  switch(action.type){
    case'INCREMENT':
      return{
        count: state.count + action.incrementBy
      };
    case'DECREMENT':
      return{
        count: state.count - action.decrementBy
      };
    case'RESET':
      return{
        count: 0
      };
    case 'SET':
        return {
            count: action.count
        }
    default:
        return state;
     }
};
  // if(action.type==='INCREMENT'){
  //     return{
  //         count: state.count +1
  //     };

  // }else{
  //     return state;
  // }   


const store = createStore(countReducer);


 const unsubscribe= store.subscribe(()=>{
    console.log(store.getState());
 });

 
store.dispatch(incrementCount({incrementBy:5}));

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch(decrementCount({decrementBy:50}));

store.dispatch(decrementCount({}));

store.dispatch(resetCount());

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    count: 101
});

store.dispatch(setCount({count:200}));


unsubscribe();