import React, { useState } from 'react'
import { Button } from '../button/Button';

export const Counter = ( {initialValue=0, increment=1, decrement=1} ) => {

    const [counter, setcounter] = useState( initialValue );

  return (
     <>
       <h1>Counter</h1>
       <h2> { counter } </h2>
       <Button style={ {color:"red"} } setcounter={ setcounter } newValue={ counter + increment } >+</Button>
       <Button style={ {color:"pink"} } setcounter={ setcounter } newValue={ counter - decrement } >-</Button>
       <Button style={ {color:"purple"} } setcounter={ setcounter } newValue={ initialValue } >Reset</Button>
     </>
  );
};

/*
  Hacer un componente para el botón
  atributo: increment={5}
  atributo: increment={-5}
  atributo: onClick={ fncCallback }
  Color text: blue;
*/
