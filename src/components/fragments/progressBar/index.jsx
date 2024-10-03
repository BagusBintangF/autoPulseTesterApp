import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UseApiHook from '../../../hook'



const ProgressBar = (props) => {
  const [eepromResponse, setEepromResponse] = useState([])
  const [compareResponse, setCompareResponse] = useState([])
  
//   useEffect(()=>{
//     RenderNotification()
//   },[compareResponse])

  const SetEepromConfig = async (id) =>{
    try{
        const data = await (await fetch(`http://127.0.0.1:8000/set-eeprom/${id}`)).json()
        setEepromResponse(data)
        if(data != null)
            alert(`${data.message}`)
        else{
            alert('Error')
        }
    } catch(err){
        return(err)
    }
  }
  const CompareEepromConfig = async (id) =>{
    try{
        const data  = await (await fetch(`http://127.0.0.1:8000/compare-eeprom/${id}`)).json()
        setCompareResponse(data)
        if(data != null)
            alert(`${data.boardName} : ${data.message}`)
        else{
            alert('Error')
        }
        // RenderNotification()
    } catch(err){
        return(err)
    }
  }

  return (
    <>
        <div key={props.contentId} className="mt-2 mb-2 h-24 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
            <div className='flex'>
                
                <p className='flex-grow font-medium'>{props.progressBarName}</p>
                <Link key={`setButton${props.contentId}`} role="button" tabIndex="0" className='p-2' title="Upload Config" onClick={()=>SetEepromConfig(props.contentId)}>
                    <svg className="h-6 w-6 stroke-gray-800 dark:text-white hover:stroke-cyan-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="stroke-cyan-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
                    </svg>
                </Link>

                <Link key={`cekButton${props.contentId}`} role="button" tabIndex="0" className='p-2' title="Cek Config" onClick={()=>CompareEepromConfig(props.contentId)}>
                    <svg className="w-6 h-6 stroke-gray-800 dark:text-white hover:stroke-cyan-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="stroke-cyan-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"/>
                    </svg>
                    
                </Link>

            </div>
            <div key={`precentage${props.contentId}`} className="w-full bg-gray-200 rounded-full h-4.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-4.5 rounded-full text-xs font-medium text-blue-100 text-center leading-none p-0.5" style={{width: props.barPrecentage +'%'}}>{props.barPrecentage}%</div>
            </div>
        </div>
    </>

  )
}

export default ProgressBar;