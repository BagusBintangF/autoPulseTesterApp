import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ConnectIndicator from '../../elements/connectIndicator'
import UploadIcon from '../../elements/uploadIcon'
import CheckIcon from '../../elements/checkIcon'

const ProgressBar = (props) => {
  return (
    <>
        <div key={props.contentId} className="mt-2 mb-2 h-24 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
            <div className='flex'>
                
                <p className='flex-grow font-medium'>{props.progressBarName}</p>
                <Link key={`setButton${props.contentId}`} role="button" tabIndex="0" className='p-2' title="Upload Config" onClick={()=>props.fetchData(props.setDirection)}>
                    <UploadIcon/>
                </Link>

                <Link key={`cekButton${props.contentId}`} role="button" tabIndex="0" className='p-2' title="Cek Config" onClick={()=>props.fetchData(props.compareDirection)}>
                    <CheckIcon/>
                </Link>
                
            </div>
            <div className='flex'>
                <ConnectIndicator connectionStatus={props.status} />
            </div>
            {/* <div key={`precentage${props.contentId}`} className="w-full bg-gray-200 rounded-full h-4.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-4.5 rounded-full text-xs font-medium text-blue-100 text-center leading-none p-0.5" style={{width: props.barPrecentage +'%'}}>{props.barPrecentage}%</div>
            </div> */}
        </div>
    </>

  )
}

export default ProgressBar;