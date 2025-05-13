import React, { useState } from 'react'
 import { assets } from "../assets/assets_frontend/assets";

import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  const [showmenu,setshowmenu]=useState(false)
  const [token ,settoken]=useState(true)
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-500">
      <img onClick={()=> navigate('/')} className='w-44 cursor-pointer'  src={assets.logo} alt="" />
      <ul className=' gap-5 hidden md:flex font-medium ' >
        <NavLink to='/'>
      <li  className='py-1' >HOME</li> <hr className=' hidden border-none outline-none  h-0.5 bg-primary w-3/5 m-auto' /></NavLink>
        <NavLink to='/doctors'><li className='py-1'>ALL DOCTORS</li> <hr  className='hidden border-none outline-none  h-0.5 bg-primary w-3/5 m-auto' /></NavLink>
        <NavLink to='/about'><li className='py-1'>ABOUT</li> <hr  className=' hidden border-none outline-none  h-0.5 bg-primary w-3/5 m-auto' /></NavLink>
        <NavLink to='/contact'><li className='py-1'>CONTACT</li> <hr  className='hidden border-none outline-none  h-0.5 bg-primary w-3/5 m-auto' /></NavLink>
      </ul>
      {token?<div className='flex items-center gap-4 cursor-pointer group relative'>
        <img src={assets.profile_pic} alt="" className='cursor-pointer h-12 w-14 rounded-full'/>
        <img src={assets.dropdown_icon} alt="" className='w-2.5'/>
    <div className='absolute top-0 right-0 pt-16 font-medium text-gray-600 z-20 hidden text-base group-hover:block'>
    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4' >
      <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile </p>
      <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointment </p>
      <p onClick={()=>settoken(false)} className='hover:text-black cursor-pointer'>Logout</p>
    </div>
</div>

        </div>
       
          :<div className='flex items-center gap-4' >
        <button onClick={()=>navigate('/login')} className='bg-primary text-white rounded-full px-8 py-3 font-light  hidden md:block  ' >Create Account</button>
      </div>}
      
    </div>
  )
}

export default Navbar
