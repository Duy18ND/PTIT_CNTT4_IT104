import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function EXERCISE01() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-around p-5 bg-[#007bff] text-white font-medium text-[18px]'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
      <div className='text-center'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
