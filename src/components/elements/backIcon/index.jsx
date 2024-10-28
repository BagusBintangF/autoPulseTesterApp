import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const BackIcon = (props) => {
  const navigate = useNavigate()
  return (
    <Link onClick={()=>navigate(`${props.direction}`)} role="button" tabIndex="0" className='item-center' title="Run" >
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
        </svg>
    </Link>
  )
}

export default BackIcon