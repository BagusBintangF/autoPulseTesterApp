import React from 'react'
import MotorSequence from '../../../hook/motorSequence'
import { Link } from 'react-router-dom'

const SequenceBar = (props) => {
  return (
    <>
    <div key={props.contentId} className="mt-2 mb-2 h-24 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
        <div className='flex'>
            
            <p className='flex-grow font-medium'>{props.progressBarName}</p>
            <Link key={`setButton${props.contentId}`} role="button" tabIndex="0" className='p-2' title="Run" onClick={()=>MotorSequence(props.direction, props.contentId)}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
                </svg>
            </Link>
        </div>
        {/* <div key={`precentage${props.contentId}`} className="w-full bg-gray-200 rounded-full h-4.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-4.5 rounded-full text-xs font-medium text-blue-100 text-center leading-none p-0.5" style={{width: props.barPrecentage +'%'}}>{props.barPrecentage}%</div>
        </div> */}
    </div>
</>
  )
}

export default SequenceBar