import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);
  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      {isLoggedIn ? <h3>This info should be hidden</h3> : ''}
    </div>
  );
}

export default App;
