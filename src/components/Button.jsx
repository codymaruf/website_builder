import React, { useRef, useEffect } from 'react';
import { useNode } from "@craftjs/core";

const Button = ({text, className}) => {

const applyClass = className ? className :'bg-red-600 px-2 w-23 py-2 rounded-2xl hover:bg-red-700 m-auto' ;
const { connectors: {connect, drag} } = useNode();

const ref = useRef(null);
useEffect(() => {
  if (ref.current) {
    connect(drag(ref.current));
  } 
}, [connect, drag]);

  return(
  <button ref={ref}  className={applyClass}>
    {text}
  </button>
  )
}

export default Button 