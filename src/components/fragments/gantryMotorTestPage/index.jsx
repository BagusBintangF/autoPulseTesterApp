import React from 'react'
import DialogBar from '../dialogBar';

const GantryMotorTestPage = (props) => {
    const gantryDialogContent=[

        {
            id:0,
            title:"Testing Motor Y Axis",
            content:"Page untuk test limit switch pada station"
        },
        {
            id:1,
            title:"Testing Motor X Axis",
            content:"Page untuk test Pressure Vaccum Sensor pada station"
        },
        {
            id:2,
            title:"Testing Motor Z Axis",
            content:"Page untuk test Pressure Vaccum Sensor pada station"
        },
        {
            id:3,
            title:"Testing Servo",
            content:"Page untuk test Pressure Vaccum Sensor pada station"
        },
    ];

    return (
    <>
        <nav className="static z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <h5 className="block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Motor Testing Page</h5>
        </nav>
        {
            gantryDialogContent.map(function (contentDialog){
                return(
                    <DialogBar key={contentDialog.id} contentId={contentDialog.id} title={contentDialog.title} content={contentDialog.content} direction={contentDialog.direction}/>    
                )
            })
            
        }
    </>
  )
}

export default GantryMotorTestPage