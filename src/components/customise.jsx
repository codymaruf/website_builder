import React from 'react'

const customise = () => {
  return (
    <section className='h-[70vh] sm:w-[350vw] m-4 flex flex-col justify-start gap-4 border-1 border-gray-700 rounded p-3'>
        <h1 className='mx-auto my-1 text-orange-600'>Customise your Website</h1>
        <hr className='text-orange-600'/>
       <ul className="list-disc pl-5">
  <li>
    <h1 className="mx-auto my-1">Add a Title</h1>
  </li>
  <li>
    <p className="mx-auto my-1 font-serif text-sm">
      Add a Description
    </p>
  </li>
  <li>
    <button 
            className='bg-red-600 px-2  py-1 rounded-2xl hover:bg-red-700 m-auto'>add your Button</button>
  </li>
</ul>

    </section>
  )
}

export default customise