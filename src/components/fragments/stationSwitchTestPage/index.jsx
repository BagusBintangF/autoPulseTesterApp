import React, { useEffect, useState } from 'react'
import BackIcon from '../../elements/backIcon';
import DialogBarWithIndicator from '../dialogBarWithIndicator';
import { useGlobalContext } from '../../../hook/globalContext';

const StationSwitchTestPage = (props) => {
    const [sensorState, setSensorState] = useState([])
    const {useDirection} = useGlobalContext()

    const stationSwitchDialogContent=[
        {
            id:"input",
            title:"Testing Switch",
            content:"Aktifkan masing-masing switch pada station dan perhatikan perubahan pada indikator Switch",
            testing:[
                {   
                    boardId : 5,
                    sensorId : 0,
                    testName:"Limmit Switch Min",
                    // isOn:stateArray[0]
                },
                {   
                    boardId : 5,
                    sensorId : 1,
                    testName:"Limmit Switch Max",
                    // isOn:stateArray[1]
                },
                {   
                    boardId : 5,
                    sensorId : 2,
                    testName:"Switch Clamp 1",
                    // isOn:stateArray[2]
                },
                {   
                    boardId : 5,
                    sensorId : 3,
                    testName:"Switch Clamp 2",
                    // isOn:stateArray[2]
                },
            ]
        },
    ];

    const fetchPost = async (id) => {
        try {
           const response = await fetch(`http://127.0.0.1:8000/sensor-station/${useDirection}/${id}`);
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
           for (const contentDialogFetch of stationSwitchDialogContent) {
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
            <BackIcon direction="/station/"/>
            <h5 className="item-center inline-block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Input/Output Testing Page</h5>
        </nav>
        {
            stationSwitchDialogContent.map(function (contentDialogInput){
                return(
                    <DialogBarWithIndicator key={contentDialogInput.id} contentId={contentDialogInput.id} title={contentDialogInput.title} content={contentDialogInput.content} testing={sensorState}/>    
                )
            })
        }
    </>
  )
}

export default StationSwitchTestPage