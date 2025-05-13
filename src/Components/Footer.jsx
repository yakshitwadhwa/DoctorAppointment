import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
{/* left section  */}
<div>
    <img className='mb-5 w-40' src={assets.logo} alt="" />
    <p className='w-full md:2/3 text-gray-600 leading-6' >Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, pariatur? Quaerat, asperiores architecto consequuntur aut expedita dolorum earum repellat minus. dolor sit, amet consectetur adipisicing elit. Expedita dolor non et eaque vel distinctio error molestiae ullam nobis consectetur.</p>
</div>
{/* center  */}
<div>
<p className='text-xl font-medium mb-5'>Company</p>
<ul className='flex-col flex gap-2 text-gray-600'>
<li>Home</li>
<li>About US</li>
<li>Contact Us</li>
<li>Privacy Policy </li>
</ul>
</div>
{/* right */}
<div>
    <p className='text-xl font-medium mb-5'>get in touch</p>
    <ul className='flex-col flex gap-2 text-gray-600'>
        <li>+918168124746</li>
        <li>yakshitwadhwa@gmail.com</li>
    </ul>
</div>





      </div>
      <div>
        <hr className='border-b border-b-black' />
        <p className='py-5 text-sm text-center'>Copyright   2024@    PRESCPRIPTO     ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default Footer
