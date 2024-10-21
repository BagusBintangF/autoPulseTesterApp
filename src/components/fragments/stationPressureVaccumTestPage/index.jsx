import React from 'react'
import DialogBar from '../dialogBar';
import DialogBarWithContent from '../dialogBarWithContent';
import BackIcon from '../../elements/backIcon';

const StationPressureVaccumTestPage = (props) => {
    const gantryMotorDialogContent=[
        {
            id:0,
            title:"Testing Station Sensor",
            content:"Page untuk test limit switch pada station",
            testing:[
                {   
                    testId : 0,
                    testName:"Pressure Sensor 1",
                    direction:"motor-test/sequence/0"
                },
                {
                    testId : 1,
                    testName:"Pressure Sensor 2",
                    direction:"motor-test/homing/0",
                },
                {   
                    testId : 2,
                    testName:"Pressure Sensor 3",
                    direction:"motor-test/sequence/0"
                },
                {
                    testId : 3,
                    testName:"Vacuum Sensor 2",
                    direction:"motor-test/homing/0",
                } 
            ]
        },
    ];

    return (
    <>
        <nav className="static flex  z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <BackIcon direction="/gantry/"/>
            <h5 className="item-center inline-block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Motor Testing Page</h5>
        </nav>
        {
            gantryMotorDialogContent.map(function (contentDialog){
                return(
                    <DialogBarWithContent key={contentDialog.id} contentId={contentDialog.id} title={contentDialog.title} content={contentDialog.content} testing={contentDialog.testing}/>    
                )
            }) 
        }
    </>
  )
}

export default StationPressureVaccumTestPage