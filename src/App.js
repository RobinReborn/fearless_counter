import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState('');
  function get_count(){
    fetch('https://api.countapi.xyz/hit/robinsproject/key')
    .then(response => response.json())
    .then(data => setCount(data.value));
  }
  return (
    <div className="App">
      <button type="button" onClick={get_count}>Get Count</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
