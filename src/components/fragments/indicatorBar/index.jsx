import React, { useState } from 'react'
import MotorSequence from '../../../hook/motorSequence'
import { Link } from 'react-router-dom'
import RunIcon from '../../elements/runIcon'

const IndicatorBar = (props) => {
  var backgroundColor = "bg-rose-500"

  if(props.sensorState == 1){
      backgroundColor = "bg-green-500"
  }
  else{
      backgroundColor = "bg-rose-400"
  }

  return (
    <>
    <div className="mt-2 mb-2 h-24 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
        <div className='flex'>
            <p className='flex-grow font-medium'>{props.progressBarName}</p>
            <span className={`rounded-full h-5 w-5 ${backgroundColor}`}></span>
        </div>
        {/* <div key={`precentage${props.contentId}`} className="w-full bg-gray-200 rounded-full h-4.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-4.5 rounded-full text-xs font-medium text-blue-100 text-center leading-none p-0.5" style={{width: props.barPrecentage +'%'}}>{props.barPrecentage}%</div>
        </div> */}
    </div>
</>
  )
}

export default IndicatorBar