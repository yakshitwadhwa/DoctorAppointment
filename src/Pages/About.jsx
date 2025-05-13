import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>

<div className='flex my-10 flex-col md:flex-row gap-12 text-left'>
  <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
  <div className='flex justify-center items-start flex-col p-4 gap-6 text-sm text-gray-600 md:w-2/4 '>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum hic ab nesciunt quam consectetur a omnis neque ullam eligendi! Deserunt eligendi cumque odit, blanditiis distinctio enim mollitia laudantium? Possimus, provident!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aliquid, debitis dicta veritatis delectus assumenda ratione corrupti similique, atque suscipit quibusdam laboriosam illo illum perferendis voluptas dolores. Aut, omnis cumque.</p>
    <b className='text-gray-800'>Our Vision</b>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptas et soluta quos quod odio aut voluptatum dolore labore rem quis laboriosam deserunt, hic incidunt velit aspernatur cupiditate, magnam vero?</p>
  </div>
</div>



<div className=' text-xl pt-10 text-gray-500 my-4' >
  <p>Why <span className='text-gray-700 font-medium'>Choose Us</span></p>
</div>

<div className='flex flex-col md:flex-row mb-20 text-gray-600 text-left'>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]
  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>Efficiency:</b>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, ratione?</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]
  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
  <b>Conveince:</b>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, possimus!</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]
  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
  <b>Personalization:</b>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, excepturi.</p>
  </div>
</div>
    </div>
  )
}

export default About
