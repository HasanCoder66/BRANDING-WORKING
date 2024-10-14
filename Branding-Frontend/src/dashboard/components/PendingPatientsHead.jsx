import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5"
const PendingPatientsHeader = () => {
  return (
    <div>
        <div className='font-bold text-xl text-slate-600 p-5 bg-white flex mb-8'> <IoDocumentTextOutline className='text-md'/><h1>Pending Patients List</h1></div>
        
    </div>
  )
}

export default PendingPatientsHeader