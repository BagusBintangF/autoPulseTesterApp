import React, { useEffect, useState } from 'react'
import BackIcon from '../../elements/backIcon';
import DialogBarWithIndicator from '../dialogBarWithIndicator';
import ToggleBar from '../toggleBar';

const GantryIoTestPage = (props) => {
    const [sensorState, setSensorState] = useState([])
    const gantryOutputDialogContent=[
        {
            id:"output",
            title:"Testing Output",
            content:"Saat switch dalam keadaan ON, pastikan indikator output menyala",
            testing:[
                {   
                    testId : 0,
                    testName:"LED Strip",
                    direction:"set-brake/6/0/"
                },
                {   
                    testId : 0,
                    testName:"Z Motor Brake",
                    direction:"set-brake/2/0/"
                },
            ]
        },
    ];
    const gantryInputDialogContent=[
        {
            id:"input",
            title:"Testing Input",
            content:"Aktifkan setiap input pada board gantry lalu perhatikan perubahan pada input indikator ",
            testing:[
                {   
                    boardId : 3,
                    sensorId : 0,
                    testName:"Colission Sensor",
                    // isOn:stateArray[0]
                },
                {   
                    boardId : 6,
                    sensorId : 1,
                    testName:"Door Sensor",
                    // isOn:stateArray[1]
                },
                {   
                    boardId : 6,
                    sensorId : 2,
                    testName:"Capacitive Sensor",
                    // isOn:stateArray[2]
                },
            ]
        },
    ];

    const fetchPost = async (id) => {
        try {
           const response = await fetch(`http://127.0.0.1:8000/sensor-gantry/${id}`);
           if (!response.ok) {
              throw new Error('Network response was not ok');
           }
           const data = await response.json();
           setSensorState(prevState => {
            const sensorExists = prevState.find(sensor => sensor.sensorId === data.sensorId);

            if (sensorExists) {
                return prevState.map(sensor => 
                    sensor.sensorId === data.sensorId ? { ...sensor, ...data } : sensor
                );
            } else {
                return [...prevState, data];
            }
         });
        } catch (error) {
           console.error('Fetch error:', error);
        }
     };
     
     useEffect(() => {
        const timeoutId = setInterval(async () => {
           for (const contentDialogFetch of gantryInputDialogContent) {
              for (const testingFetch of contentDialogFetch.testing) {
                 await fetchPost(testingFetch.sensorId);
              }
           }
        }, 100);
     
        return () => clearInterval(timeoutId);
     }, []);

    return (
    <>
        <nav className="static flex  z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <BackIcon direction="/gantry/"/>
            <h5 className="item-center inline-block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Input/Output Testing Page</h5>
        </nav>
        {
            gantryOutputDialogContent.map(function (contentDialogOutput){
                return(
                    <div key={contentDialogOutput.id} className="relative xl:w-[25rem] w-full m-6 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
                    <h2 className="font-semibold p-2">{contentDialogOutput.title}</h2>
                    <p className="p-2 text-justify">{contentDialogOutput.content}</p>
                    {
                        contentDialogOutput.testing.map(function (testingDialog){
                            return(
                                <ToggleBar key={`${contentDialogOutput.id}${testingDialog.testName}${testingDialog.testId}`} contentId = {contentDialogOutput.id} progressBarName={testingDialog.testName} direction={testingDialog.direction}/>
                            )
                        })
                    }

                </div>
                )

                // return(
                //     <DialogBarWithContent key={contentDialogOutput.id} contentId={contentDialogOutput.id} title={contentDialogOutput.title} content={contentDialogOutput.content} testing={contentDialogOutput.testing}/>    
                // )
            })
            
        }
        {
            gantryInputDialogContent.map(function (contentDialogInput){
                return(
                    <DialogBarWithIndicator key={contentDialogInput.id} contentId={contentDialogInput.id} title={contentDialogInput.title} content={contentDialogInput.content} testing={sensorState}/>    
                )
            })
            
        }
    </>
  )
}

export default GantryIoTestPage