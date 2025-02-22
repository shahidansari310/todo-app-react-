import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-slate-400 p-2 text-xl'>
        <span className='font-bold'>iTask</span> 
      <ul className='flex gap-8 mx-9'>
        <li className='hover:font-bold transiton-all'><a href="#">Home</a></li>
        <li className='hover:font-bold transiton-all'>Your task</li>
      </ul>
    </div>
  )
}

export default Navbar
