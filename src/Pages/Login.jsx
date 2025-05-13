import React, { useState } from 'react'

const Login = () => {
  const [state,setstate ]= useState('Sign Up');
  const [email,setemail]= useState('');
  const [password,setpassword]= useState('');
const [name,setname] =useState('');

const onsubmithandler=async(event)=>{
  event.preventDefault()
}
  return (
    <form className='min-h-[80vh] flex items-center text-left'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-2-[340px] text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'> {state==='Sign Up'? "Create Account":"Login"}</p>
        <p>Please {state==='Sign Up' ?"sign up":"Login"} to book an Appointment </p>
{state === "Sign Up" && <div className='w-full'> 
          <p>Full Name</p>
          <input className='border border-zinc-600 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setname(e.target.name)} value={name} />
        </div>}
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-600 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setemail(e.target.name)} value={email} />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-600 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setpassword(e.target.name)} value={password} />
        </div>

<button className=' w-full font-medium bg-primary text-white rounded-md  p-4 m-3 items-center '>
{state==='Sign Up'? "Create Account":"Login"}
</button>

<p>
{state==='Sign Up'? <p> Already have an account ?<span className='text-primary underline cursor-pointer' onClick={()=>setstate('Login')}> Login here</span></p> :<p>
<p>  Create a account ?<span className='text-primary underline cursor-pointer' onClick={()=>setstate('Sign Up')}> Sign Up here</span></p>
  </p>}
</p>
      </div>
    </form>
  )
}

export default Login
