import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';


const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment (state) {
            state.counter++;
        },
        decrement (state) {
            state.counter--;
        },
        INCREMENTBY2(state,action) {
            state.counter = state.counter + action.payload
        },
        DECREMENTBY2(state,action) {
            state.counter = state.counter - action.payload
        },
        toggleCounter (state) {
            state.showCounter = !state.showCounter
        }
    }
});
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
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;

