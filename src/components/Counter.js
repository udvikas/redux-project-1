import { counterActions } from '../store/counter';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'; 

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter); 

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };

  const decrementHandler = () => {
    dispatch (counterActions.decrement())
  };
  
  const incrementBy2 = () => {
    dispatch(counterActions.INCREMENTBY2(2)) // { type: 'SOME UNIQUE IDENTIFIER', payload: 2}
  }

  const decrementBy2 = () => {
    dispatch(counterActions.DECREMENTBY2(2))
  }

  // const incrementBy5 = () => {
  //   dispatch( {type: 'incrementby5'})
  // }
  // const decrementBy5 = () => {
  //   dispatch( {type: 'decrementby5'})
  // }
  const toggleCounterHandler = () => {
    dispatch( counterActions.toggleCounter());
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
       <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div> 
       <div>
        <button onClick={incrementBy2}>Increment by 2</button>
        <button onClick={decrementBy2}>Decrement by 2</button>
      </div>  
      {/* <div>
        <button onClick={incrementBy5}>IncrementBy5</button>
        <button onClick={decrementBy5}>DecrementBy5</button>
      </div> */}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
