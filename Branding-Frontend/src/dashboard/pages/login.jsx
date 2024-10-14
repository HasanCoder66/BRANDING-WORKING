import React from 'react'
function Login() {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-600'>
        <div className='w-96 p-6 shadow-lg bg-white '>
<h1 className='text-1xl block  font-bold text-grey'>SIGN IN
    <br />
</h1>
<div className='mt-4'>
    {/* <label className='block text-base mb-2' htmlFor="username">Username</label> */}
    <input type="text"  className=' w-full text-base border-b  py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Your Username'/>
</div>
<div className='mt-5'>
    {/* <label className='block text-base mb-2' htmlFor="password">Password</label> */}
    <input type="password"  className=' w-full border-b text-base  py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Your Password'/>
</div>
<div className='mt-3 flex justify-between items-center'>
 
   
    <div>

</div>
</div>
<div className='mt-5'>
    <button type='submit' className='border-2 border-blue-500 bg-blue-500 text-white py-1 w-full  hover:bg-transparent hover:text-stone-950 font-semibold'>LOG IN</button>

</div>

        </div>
    </div>
  )
}

export default Login