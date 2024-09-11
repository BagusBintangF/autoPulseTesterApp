import React from 'react'
import DialogBar from '../dialogBar';
import DialogBarWithContent from '../dialogBarWithContent';
import ProgressBar from '../progressBar';

const EepromPage = (props) => {
    const eepromDialogContent=[
        {
            id:1,
            title:"Concentration Station",
            content:"Page untuk test valve pada station"
        },
        {
            id:2,
            title:"Cleaning Station",
            content:"Page untuk test limit switch pada station"
        },
        {
            id:3,
            title:"X Axis Board",
            content:"Page untuk test Pressure Vaccum Sensor pada station"
        },
        {
            id:4,
            title:"Y Axis Board",
            content:"Page untuk test Load Cell pada station"
        },
        {
            id:5,
            title:"Z Axis Board",
            content:"Page untuk test Motor pada station"
        },
        {
            id:6,
            title:"Gripper Board",
            content:"Page untuk test Motor pada station"
        },
        {
            id:7,
            title:"IO Board",
            content:"Page untuk test Motor pada station"
        },
    ];

    return (
    <>
        <nav className="relative z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            {/* <span role="button" className="leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                </svg>
            </span> */}
            <h5 className="block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Setting EEPROM</h5>
        </nav>
        <div key={props.id} className="w-full m-6 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
            <h2 className="font-semibold p-2">{props.title}</h2>
            <p className="p-2 text-justify">{props.content}</p>
            {
            eepromDialogContent.map(function (contentDialog){
                return(
                    <ProgressBar id={contentDialog.id} progressBarName={contentDialog.title}/>    
                )
            })
            
            }
            
        </div>
    </>
  )
}

export default EepromPage