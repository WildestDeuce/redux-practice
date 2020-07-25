import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions/actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}  </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} >-</button>
      {isLoggedIn ? <h3>This info should be hidden</h3> : ''}
    </div>
  );
}

export default App;
