import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import {Link} from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16  text-gray-800' id='speciality'>
      
        <h1 className='text-3xl font-medium'>Find By Speciality</h1>
     <p className='sm:w-1/3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae modi illo reprehenderit, cumque eius ipsum amet repellat. Debitis, incidunt vitae.</p>
     <div className='flex  sm:justify-center gap-8 pt-5 w-full overflow-hidden '>
{specialityData.map((item,index)=>(
    <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center  text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to={`/doctors/${item.speciality}`}> 
    <img className='w-24 sm:w-28  mb-2' src={item.image} alt="" />
    <p>{item.speciality}</p></Link>
))}
     </div>
    </div>
  )
}

export default SpecialityMenu
