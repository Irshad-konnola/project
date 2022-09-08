import React from 'react'

const NavBar = ({children}) => {
  return (
      
    <div className='bg-gray-900 flex item-center py-10'>
    <div className='max-w-md mx-auto w-full' >
        <h1 className='text-white text-center text-2xl font-bold font-sans mb-5'>Find Images</h1>
        {children}
    </div>
    </div>
  )
}

export default NavBar