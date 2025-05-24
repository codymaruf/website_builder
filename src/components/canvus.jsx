import React from 'react'
import Text from './Text'
import Button from './Button'
import Container from './Container'
import Card from './Card'
// import { useNode } from "@craftjs/core";

import {Editor, Frame, Element} from "@craftjs/core";


const Canvus = () => {
  return (
    <section>

        <div className='relative z-10 h-[70vh] sm:w-[60vw] m-4 flex flex-col justify-start border-1 border-gray-700 rounded p-3'>
         
            <Editor resolver={{Button, Text, Container, Card}}> 
              <Frame>
                 <Element is={Container} canvas>
            <Text text='hello'/>
            <Text className='text-sm' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus impedit mollitia pariatur totam ipsum porro recusandae dignissimos eveniet facere? Nesciunt, ab? Illo tempora ipsa minima assumenda sit consequatur? Placeat, esse.' />
            
            <Card />
            <Button text='button'/>
            </Element>
            </Frame>
            </Editor>
            
        </div>
    </section>
  )
}

export default Canvus