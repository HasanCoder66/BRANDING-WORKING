import React from 'react'
import { Link } from 'react-router-dom'

const EditInTouchBtn = ({linktoRoute}) => {
  return (
    <Link to={linktoRoute}>
    <button className='mt-[2rem] uppercase bg-[#fca311]  py-[10px] px-[15px] text-[#14213d] text-2xl font-bold rounded-lg '>
        Edit in Touch
    </button>
    </Link>
  )
}

export default EditInTouchBtn