import React from 'react'
import DialogBar from '../dialogBar';

const StationPage = (props) => {
    const stationDialogContent=[
        {
            id:1,
            title:"Valve Test",
            content:"Page untuk test valve pada station",
            direction:"valve-test/",
        },
        {
            id:2,
            title:"Switch Test",
            content:"Page untuk test limit switch pada station",
            direction:"switch-test/",
        },
        {
            id:3,
            title:"Pressure Vaccum Sensor Test",
            content:"Page untuk test Pressure Vaccum Sensor pada station"
        },
        {
            id:4,
            title:"Load Cell Test",
            content:"Page untuk test Load Cell pada station"
        },
        {
            id:5,
            title:"Motor Test",
            content:"Page untuk test Motor pada station",
            direction:"motor-test/",
        },
    ];

    return (
    <>
        <nav className="relative z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <h5 className="block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Station Testing Page</h5>
        </nav>
        {
            stationDialogContent.map(function (contentDialog){
                return(
                    <DialogBar key={contentDialog.id} title={contentDialog.title} content={contentDialog.content} direction={contentDialog.direction}/>    
                )
            })
            
        }

    </>
  )
}

export default StationPage