import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5"
const AllInvoicesHeader = () => {
  return (
    <div>
        <div className='font-bold text-xl text-slate-600 p-5 bg-white flex mb-8'> <IoDocumentTextOutline className='text-md'/><h1>Invoices List</h1></div>
        
    </div>
  )
}

export default AllInvoicesHeader