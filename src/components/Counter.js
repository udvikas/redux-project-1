import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'; 

const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment'})
  };

  const decrementHandler = () => {
    dispatch ({ type: 'decrement'})
  };
  
  const incrementBy2 = () => {
    dispatch( {type: 'INCREMENTBY2'})
  }

  const decrementBy2 = () => {
    dispatch( {type: 'DECREMENTBY2'})
  }

  const incrementBy5 = () => {
    dispatch( {type: 'incrementby5'})
  }
  const decrementBy5 = () => {
    dispatch( {type: 'decrementby5'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {/* <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy2}>Increment by 2</button>
        <button onClick={decrementBy2}>Decrement by 2</button>
      </div> */}
      <div>
        <button onClick={incrementBy5}>IncrementBy5</button>
        <button onClick={decrementBy5}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
