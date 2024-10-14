import React from 'react'
import { FaListAlt } from "react-icons/fa";


const ReorderProductsHeader = (props) => {
  return (
    
        <div >
            <div className=' font-bold text-xl text-slate-600 p-5 bg-white flex  mb-8'> <FaListAlt className='text-md mx-2'/><h1>Reorder Products</h1></div>
            
        </div>
  )
}

export default ReorderProductsHeader