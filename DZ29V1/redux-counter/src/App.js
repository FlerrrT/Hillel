import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';

const App = () => {
  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;