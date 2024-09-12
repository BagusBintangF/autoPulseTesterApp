import React from 'react'
import DialogBar from '../dialogBar';

const GantryPage = (props) => {
    const gantryDialogContent=[
        {
            id:1,
            title:"Setting EEPROM",
            content:"Page untuk test valve pada station",
            direction:"eeprom"
        },
        {
            id:2,
            title:"Testing Motor",
            content:"Page untuk test limit switch pada station"
        },
        {
            id:3,
            title:"Testing Sensor",
            content:"Page untuk test Pressure Vaccum Sensor pada station"
        },
        // {
        //     id:4,
        //     title:"Testing Motor Z",
        //     content:"Page untuk test Load Cell pada station"
        // },
        // {
        //     id:5,
        //     title:"Testing Servo",
        //     content:"Page untuk test Motor pada station"
        // },
        // {
        //     id:6,
        //     title:"Testing Sensor",
        //     content:"Page untuk test Motor pada station"
        // },
    ];

    return (
    <>
        <nav className="relative z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <h5 className="block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Gantry Testing Page</h5>
        </nav>
        {
            gantryDialogContent.map(function (contentDialog){
                return(
                    <DialogBar contentId={contentDialog.id} title={contentDialog.title} content={contentDialog.content} direction={contentDialog.direction}/>    
                )
            })
            
        }
    </>
  )
}

export default GantryPage