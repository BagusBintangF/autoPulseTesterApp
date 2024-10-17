import React from 'react'
import BackIcon from '../../elements/backIcon';
import DialogBarWithContent from '../dialogBarWithContent';
import ToggleBar from '../toggleBar';

const ValveTestPage = () => {
  const valveDialogContent=[
    {
        id:0,
        title:"Testing Front Valve",
        content:"Page untuk test limit switch pada station",
        testing:[
            {   
                testId : 0,
                testName:"Sequence Test",
                direction:"sequence"
            },
            {
                testId : 1,
                testName:"Homing Test",
                direction:"homing",
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
                testName:"Sequence Test",
                direction:"sequence"
            },
            {
                testId : 1,
                testName:"Homing Test",
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
                testName:"Sequence Test",
                direction:"sequence"
            },
            {
                testId : 1,
                testName:"Homing Test",
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
                testName:"Sequence Test",
                direction:"servo"
            },
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
                <DialogBarWithContent key={contentDialog.id} contentId={contentDialog.id} title={contentDialog.title} content={contentDialog.content} testing={contentDialog.testing}/>    
            )
        })
        
    }
    <ToggleBar/>
</>
  )
}

export default ValveTestPage