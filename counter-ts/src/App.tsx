import React, { useState } from 'react';

import CounterContainer from './component';
function App() {
   const  [state, setState] = useState<boolean>(true);
  return (
    <div>
    <button onClick={()=> setState(!state)}>toggel</button>
    {state?<CounterContainer/> :""}
    </div>

  );
}

export default App;
