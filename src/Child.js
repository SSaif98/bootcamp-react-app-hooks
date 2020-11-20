import React, {useContext} from 'react';
import CounterContext from './CounterContext';

function Child() {

let countValue = useContext(CounterContext)
 
  return (
    <div >
      <h2>This is done using Context API</h2>
    <h3>Counter Value is : {countValue[0]} </h3>

    <button onClick={() => {countValue[1](++countValue[0])} }>
        Increment Context</button>
    </div>
  );
}

export default Child;
