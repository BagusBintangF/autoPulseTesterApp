import React from 'react'
import DialogBar from '../dialogBar';
import DialogBarWithContent from '../dialogBarWithContent';
import BackIcon from '../../elements/backIcon';
import ToggleBar from '../toggleBar';

const StationMotorTestPage = (props) => {
    const stationMotorDialogContent=[
        {
            id:0,
            title:"Testing Motor 1",
            content:"Page untuk test limit switch pada station",
            testing:[
                {
                    testId : 0,
                    testName:"Homing Test",
                    direction:"motor-test/homing/3",
                } 
            ]
        },
        {
            id:1,
            title:"Testing Motor 2",
            content:"Page untuk test Pressure Vaccum Sensor pada station",
            testing:[
                {
                    testId : 0,
                    testName:"Homing Test",
                    direction:"motor-test/homing/4",
                } 
            ]
        },
        {
            id:2,
            title:"Testing Motor DC",
            content:"Page untuk test Pressure Vaccum Sensor pada station",
            testing:[
                {
                    testId : 0,
                    testName:"Rotate Test",
                    direction:"motor-test/dc/6/",
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
            stationMotorDialogContent.map(function (contentDialog){
                if(contentDialog.id != 2){
                    return(
                        <DialogBarWithContent key={contentDialog.id} contentId={contentDialog.id} title={contentDialog.title} content={contentDialog.content} testing={contentDialog.testing}/>    
                    )
                }
                else{
                    return(
                    <div key={contentDialog.id} className="relative xl:w-[25rem] w-full m-6 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
                        <h2 className="font-semibold p-2">{contentDialog.title}</h2>
                        <p className="p-2 text-justify">{contentDialog.content}</p>
                        {
                            contentDialog.testing.map(function (testingDialog){
                                return(
                                    <ToggleBar key={`${contentDialog.id}${testingDialog.testName}${testingDialog.testId}`} contentId = {contentDialog.id} progressBarName={testingDialog.testName} direction={testingDialog.direction}/>
                                )
                            })
                        }
                    </div>
                    )
                }
            }) 
        }
    </>
  )
}

export default StationMotorTestPage