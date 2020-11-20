import React, {useContext} from 'react';
import CounterContext from './CounterContext';

function Child() {

let countValue = useContext(CounterContext)
 
  return (
    <div >
    <h3>Counter Value is : {countValue} </h3>
    </div>
  );
}

export default Child;
