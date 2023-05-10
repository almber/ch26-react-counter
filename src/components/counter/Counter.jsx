import React, { useState } from 'react'
import { Button } from '../button/Button';

export const Counter = ( {initialValue=0, increment=1, decrement=1} ) => {

    const [counter, setcounter] = useState( initialValue );

    const handleIncrement = (event, message)=>{
        console.log(event, message);
        setcounter( counter + increment )
    }

    const handleDecrement = (event)=>{
        setcounter( counter - decrement )
    }

    const handleReset = (event) =>{
        setcounter( initialValue )
    }

  return (
     <>
       <h1>Counter</h1>
       <h2> { counter } </h2>
       <Button onClick={ handleIncrement } >+</Button>
       <Button onClick={ handleDecrement } >-</Button>
       <Button onClick={ handleReset } >Reset</Button>
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
