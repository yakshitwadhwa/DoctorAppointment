import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>Contact <span className='text-gray-700 font-medium'>Us</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6 text-left '>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'> 54709 Willms Station <br /> Suite 350 ,Washington,USA</p>
          <p className='text-gray-500'>Tel:(415) 555-0132 <br /> Email:amit@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Carrers at PRISCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <p className= 'cursor-pointer text-gray-700 font-medium border-black border px-8 py-4 hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
