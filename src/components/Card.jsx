import React, { useRef, useEffect } from 'react';
import Text from './Text'
import Button from './Button'
import {Element, useNode } from "@craftjs/core";
import Container from './Container';

const Card = () => {
    const { connectors: {connect, drag} } = useNode();

    const ref = useRef(null);
    useEffect(() => {
    if (ref.current) {
      connect(drag(ref.current));
    }
  }, [connect, drag]);
  return (
    <section ref={connect} className='border m-2 rounded-2xl p-3 shadow-lg' ref={ref}>
        
        <Text className='m-4 ' text='Your card'/>
        <Button text='card button'/>
        
    </section>
  )
}

export default Card