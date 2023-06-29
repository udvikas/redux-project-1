import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
import counterReducer from "./counter";
import authReducer from "./auth";

// const counterReducer = ( state= initialState, action ) => {
    
//     if(action.type === 'increment'){
//         return {
//             counter:state.counter + 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter:state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === 'INCREMENTBY2'){
//         return {
//             counter:state.counter + action.amount,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === 'DECREMENTBY2'){
//         return {
//             counter:state.counter - 2,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === 'incrementby5'){
//         return {
//             counter:state.counter + 5,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === 'decrementby5'){
//         return {
//             counter:state.counter - 5,
//             showCounter: state.showCounter,
//         }
//     }

//     if(action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter:state.counter,
//         }
//     }
//     return state;
// }

const store = configureStore({
    reducer: {counter:counterReducer, auth:authReducer}
});

export default store;

