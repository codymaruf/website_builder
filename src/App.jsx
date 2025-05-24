import React, {useState, useEffect} from 'react'
import Text from './components/Text'
import Button from './components/Button'
import Container from './components/Container'
import Card from './components/Card'
import { Editor, Frame, Element, useNode, useEditor } from "@craftjs/core";
import lz from "lzutf8";
import copy from 'copy-to-clipboard';






const App = () => {

 
  const [dimmed, setdimmed] = useState(false);

  const shadow = ()=>{
    setdimmed(!dimmed);
  }




  
  return (
    <>
    
    <div >
      
      <section id='mother-parent' className={`w-full overflow-hidden text-white transition duration-300 bg-black h-screen`}>
       
         <div className={`${dimmed ? 'block': 'hidden'}`}>
           {/* Form */}

            <section className='absolute z-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] text-white'>
        <div className='flex flex-col items-center gap-4'>
            
            <div className='flex w-full border-t-1 border-white h-40'>
                <textarea
                
                
                type="text" placeholder='Paste Your Website ' 
            className='border-none w-full outline-none px-2 resize-none h-full align-bottom overflow-y-clip'
            />
            
            </div>
        


        </div>

        
        

    </section>
         </div>
        
        
    
    

    <div className='flex justify-between p-4 w-full'>

      {/* copy  */}
      {/* new */}
      
      <div>
        <button  
 className='cursor-pointer bg-orange-800 text-oldwhite p-2 rounded-md'>
        Copy customisation
      </button>
      
      </div>

      {/* paste */}
      {/* new */}
      <button 
      onClick={ () => {
        shadow();
         setdialogOpen(true);
        }}
         className='cursor-pointer bg-orange-800 text-oldwhite p-2 rounded-md'>
        Load it
      </button>
    </div>
    <section className=
     {`w-screen flex justify-center bg-black text-white  relative z-50 transition duration-300 `}>
      
      <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-70 z-20 ${dimmed ? 'block' : 'hidden'}`} >

      </div>

     


       <div className='relative z-10 p-10' >
        {/* Canvus */}
        
        <section>
        
                <div className='relative z-10 h-[70vh] sm:w-[60vw] m-4 flex flex-col justify-start border-1 border-gray-700 rounded p-3'>
                 
                    <Editor resolver={{Button, Text, Container, Card}}> 
                      <Frame >
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
       </div >
      
       
    </section>
    
    </section>
    </div>
    </>
    
  )
}

export default App


