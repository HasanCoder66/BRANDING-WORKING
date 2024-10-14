import {  PowerSettingsNew, Settings } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-[#14213d]  px-4 py-4 flex justify-between
    '>
  <div>
    <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/431546418_122130074684204271_4361716207717831449_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHXnprVflBq13l3fL3iup--M6bmET9KADszpuYRP0oAOwElzjNkjDLbaeKabu-lUEfbMD688W_f77JFznFBEJz5&_nc_ohc=eBvRr911A5sQ7kNvgFXMJk1&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&_nc_gid=ADh--4hwlORXDVjo6sk5snl&oh=00_AYBAM7_pItMznuNxR9Ih5mwlvG9kOQfCyvbqEU9bAfi9xg&oe=6712D310" alt="" className='h-16' />
  </div>
  <div className='flex px-5'>
   <button className='text-white px-5 font-semibold text-md'><Settings style={{fontSize:"35px"}}/>  <Link to={'/accountsetting'}>AccountSetting </Link> </button> 
    <button className='text-white font-semibold text-md'><PowerSettingsNew style={{fontSize:"35px"}}/>Logout</button>
  </div>
    </div>
  )
}

export default Navbar