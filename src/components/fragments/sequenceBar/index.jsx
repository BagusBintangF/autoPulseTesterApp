import React from 'react'
import MotorSequence from '../../../hook/motorSequence'
import { Link } from 'react-router-dom'
import RunIcon from '../../elements/runIcon'

const SequenceBar = (props) => {
  return (
    <>
    <div key={`sequenceBar${props.contentId}`} className="mt-2 mb-2 h-24 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
        <div className='flex'>
            
            <p className='flex-grow font-medium'>{props.progressBarName}</p>
            <Link key={`runButton${props.contentId}`} role="button" tabIndex="0" className='p-2' title="Run" onClick={()=>MotorSequence(props.direction, props.contentId)}>
                <RunIcon/>
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