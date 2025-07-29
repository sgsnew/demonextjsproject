import React from 'react';
import logo from './logo.svg';

import Todoconainer from './components/todo-components';

const Mytodoitem =[
  {id : 1, title: 'pray'},
  {id : 2, title: 'hear'},
  {id : 3, title: 'act'},
  {id : 4, title: 'rest'}

]
function App() {
  return (
    <div style={ {border: '1px solid red', padding: '20px' , margin:10} } onClick={() => alert('it is clicked')}>
      <Todoconainer  items = {Mytodoitem} />

    </div>
  );
}
 
export default App;
