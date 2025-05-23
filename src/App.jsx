import React from 'react'
import Canvus from './components/canvus'
import Customise from './components/customise'


const App = () => {
  return (
    <>
    <section className='w-screen h-screen flex justify-center bg-black text-white 
     '>
       <Canvus />
       <Customise />
       
    </section>
    </>
    
  )
}

export default App