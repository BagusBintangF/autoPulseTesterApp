import React from 'react'
import BackIcon from '../../elements/backIcon';
import DialogBarWithContent from '../dialogBarWithContent';
import ToggleBar from '../toggleBar';
import SequenceBar from '../sequenceBar';

const ValveTestPage = () => {
  const valveDialogContent=[
    {
        id:0,
        title:"Testing Front Valve",
        content:"Page untuk test limit switch pada station",
        testing:[
            {   
                testId : 0,
                testName:"On Off Test",
                direction:"valve-test/on-off/0/"
            },
            {
                testId : 1,
                testName:"Sequence Test",
                direction:"valve-test/running/0",
            } 
        ]
    },
    {
        id:1,
        title:"Testing Back Valve",
        content:"Page untuk test Pressure Vaccum Sensor pada station",
        testing:[
            {   
                testId : 0,
                testName:"On Off Test",
                direction:"valve-test/on-off/1/"
            },
            {
                testId : 1,
                testName:"Sequence Test",
                direction:"homing",
            } 
        ]
    },
    {
        id:2,
        title:"Testing Regulator Valve",
        content:"Page untuk test Pressure Vaccum Sensor pada station",
        testing:[
            {   
                testId : 0,
                testName:"On Off Test",
                direction:"valve-test/on-off/2/"
            },
            {
                testId : 1,
                testName:"Sequence Test",
                direction:"homing",
            } 
        ]            
    },
    {
        id:3,
        title:"Testing Air Control Valve",
        content:"Page untuk test Pressure Vaccum Sensor pada station",
        testing:[
            {   
                testId : 0,
                testName:"On Off Test",
                direction:"valve-test/on-off/3/"
            },
            {
                testId : 1,
                testName:"Sequence Test",
                direction:"homing",
            } 
        ]
    },
];

return (
<>
    <nav className="static flex  z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
        <BackIcon direction="/station/"/>
        <h5 className="item-center inline-block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Valve Testing Page</h5>
    </nav>
    {
        valveDialogContent.map(function (contentDialog){
            return(
                <div key={contentDialog.id} className="relative xl:w-[25rem] w-full m-6 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
                    <h2 className="font-semibold p-2">{contentDialog.title}</h2>
                    <p className="p-2 text-justify">{contentDialog.content}</p>
                    {
                    contentDialog.testing.map(function (testingDialog){
                        if(testingDialog.testId===0){
                            return <ToggleBar key={`${contentDialog.id}${testingDialog.testName}${testingDialog.testId}`} contentId = {contentDialog.id} progressBarName={testingDialog.testName} direction={testingDialog.direction}/>
                        }
                        if(testingDialog.testId===1){
                            return <SequenceBar key={`${contentDialog.id}${testingDialog.testName}${testingDialog.testId}`} progressBarName={testingDialog.testName} contentId={contentDialog.contentId} direction={testingDialog.direction}/>
                        }
                        return null
                    })
                    }
                </div>   
            )
        })
        
    }
    
</>
  )
}

export default ValveTestPage