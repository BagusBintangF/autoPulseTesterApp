import React, {useState} from 'react'
import DialogBar from '../dialogBar';
import ComboBoxDefault from '../../elements/comboBox';


const StationPage = (props) => {
    const stationName = [
        {
            "id" : 0,
            "name" : "Concentrating Station",
            "direction" : 4,
        },
        {
            "id" : 1,
            "name" : "Cleaning Station",
            "direction" : 5,
        },
    
    ]
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
            content:"Page untuk test Pressure Vaccum Sensor pada station",
            direction:"pressure-test/",
        },
        {
            id:4,
            title:"Load Cell Test",
            content:"Page untuk test Load Cell pada station",
            direction:"loadcell-test/",
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
        <div className=' flex m-6 h-24 xl:w-[64rem] w-full rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5'>
                <p className='font-medium grow'>Pilih Tipe Station</p>
                <ComboBoxDefault nameArray={stationName}/>    
        </div>
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