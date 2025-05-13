import React, { useContext } from 'react'
// import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const DoctorCard = () => {
  const navigate = useNavigate()
  const {doctors} =useContext(AppContext);
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10' >
      
      <h1 className='text-3xl font-medium'>Doctors Cards To Book </h1>
      <p className='sm:w-1/3 text-center text-sm '>Simply Book Through Our Extensive List Of Doctors</p>

      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item,index)=>(
            <div onClick={()=>{navigate(`/appointments/${item._id}`);scrollTo(0,0)}} className='border  border-blue-200 roundex-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4  '>
                <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                    <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-700 text-[17px] font-semibold '>
                {item.speciality} <br />
                   {/* ({item.experience})// */}
                </p>
                {/* <p className='mt-1'>{item.address.line1}</p>
                <p>{item.address.line2}</p> */}

                </div>
                <button className='bg-primary px-3 py-2 text-white rounded-xl mx-3 my-3 font-medium   hover:text-black '>Book Appointment</button>
                </div>
                
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}>More</button>
    </div>
  )
}

export default DoctorCard
