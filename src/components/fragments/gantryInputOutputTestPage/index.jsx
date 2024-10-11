import React, { useEffect, useState } from 'react'
import DialogBar from '../dialogBar';
import DialogBarWithContent from '../dialogBarWithContent';
import BackIcon from '../../elements/backIcon';
import DialogBarWithIndicator from '../dialogBarWithIndicator';

const GantryIoTestPage = (props) => {
    const gantryOutputDialogContent=[
        {
            id:"output",
            title:"Testing LED Strip",
            content:"Page untuk test limit switch pada station",
            testing:[
                {   
                    testId : 0,
                    testName:"Sequence Test",
                    direction:"led"
                },
            ]
        },
    ];
    const gantryInputDialogContent=[
        {
            id:"input",
            title:"Testing Input",
            content:"Page untuk test limit switch pada station",
            testing:[
                {   
                    boardId : 3,
                    sensorId : 0,
                    testName:"Colission Sensor",
                    direction:"led"
                },
                {   
                    boardId : 6,
                    sensorId : 0,
                    testName:"Door Sensor",
                    direction:"led"
                },
                {   
                    boardId : 6,
                    sensorId : 1,
                    testName:"Capacitive Sensor",
                    direction:"led"
                },
            ]
        },
    ];

    let [sensorState, setSensorState] = useState([])
    
    useEffect(() =>{
        const timeouId = setTimeout(()=>{
            gantryInputDialogContent.map(async function (contentDialogFetch){
                contentDialogFetch.testing.map(async function (testingFetch) {
                    const dataSensor = await (await fetch(`http://127.0.0.1:8000/sensor/${testingFetch.boardId}/${testingFetch.sensorId}`)).json()
                    setSensorState(dataSensor)
                }
                )
            })
        },250)

        return ()=> clearTimeout(timeouId)

    })

    return (
    <>
        <nav className="static flex  z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <BackIcon direction="/gantry"/>
            <h5 className="item-center inline-block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Input/Output Testing Page</h5>
        </nav>
        {
            gantryOutputDialogContent.map(function (contentDialogOutput){
                return(
                    <DialogBarWithContent key={contentDialogOutput.id} contentId={contentDialogOutput.id} title={contentDialogOutput.title} content={contentDialogOutput.content} testing={contentDialogOutput.testing}/>    
                )
            })
            
        }
        {
            gantryInputDialogContent.map(function (contentDialogInput){
                return(
                    <DialogBarWithIndicator key={contentDialogInput.id} contentId={contentDialogInput.id} title={contentDialogInput.title} content={contentDialogInput.content} testing={contentDialogInput.testing} sensor={sensorState}/>    
                )
            })
            
        }
    </>
  )
}

export default GantryIoTestPage