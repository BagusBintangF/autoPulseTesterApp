import React from 'react'
import DialogBar from '../dialogBar';
import DialogBarWithContent from '../dialogBarWithContent';
import BackIcon from '../../elements/backIcon';
import LoadingPage from '../loadingPage';
import AlertBar from '../alertBar';
import useApiHookWithAlertBar from '../../../hook/useApiHookWithAlert';

const GantryMotorTestPage = (props) => {
    const {data, error, loading, showAlert, handleClose, fetchData} = useApiHookWithAlertBar()
    const contentMotorAxis = "Sequence Test akan menggerakan motor secara bolak balik, Homing Test akan menggerakan motor sampai Limit Switch Homing aktif"
    const gantryMotorDialogContent=[
        {
            id:0,
            title:"Testing Motor Y Axis",
            content:`${contentMotorAxis}`,
            testing:[
                {   
                    testId : 0,
                    testName:"Sequence Test",
                    direction:"motor-test/sequence/0"
                },
                {
                    testId : 1,
                    testName:"Homing Test",
                    direction:"motor-test/homing/0",
                } 
            ]
        },
        {
            id:1,
            title:"Testing Motor X Axis",
            content:`${contentMotorAxis}`,
            testing:[
                {   
                    testId : 0,
                    testName:"Sequence Test",
                    direction:"motor-test/sequence/1"
                },
                {
                    testId : 1,
                    testName:"Homing Test",
                    direction:"motor-test/homing/1",
                } 
            ]
        },
        {
            id:2,
            title:"Testing Motor Z Axis",
            content:`${contentMotorAxis}`,
            testing:[
                {   
                    testId : 0,
                    testName:"Sequence Test",
                    direction:"motor-test/sequence/2"
                },
                {
                    testId : 1,
                    testName:"Homing Test",
                    direction:"motor-test/homing/2",
                } 
            ]            
        },
        {
            id:3,
            title:"Testing Servo",
            content:"Sequence Test akan menjalankan motor secara bolak balik",
            testing:[
                {   
                    testId : 0,
                    testName:"Sequence Test",
                    direction:"motor-test/servo"
                },
            ]
        },
    ];

    return (
    <>
        {loading && <LoadingPage/>}
        {error && showAlert &&(<AlertBar title="Opps !" message="Error" status={error} onClose={handleClose}/>)}
        {data && showAlert && (<AlertBar title={data.deviceName} message={data.message} status={data.status} onClose={handleClose}/>)}
        <nav className="static flex  z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <BackIcon direction="/gantry/"/>
            <h5 className="item-center inline-block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Motor Testing Page</h5>
        </nav>
        {
            gantryMotorDialogContent.map(function (contentDialog){
                return(
                    <DialogBarWithContent key={contentDialog.id} contentId={contentDialog.id} title={contentDialog.title} content={contentDialog.content} testing={contentDialog.testing} fetchData = {fetchData}/>    
                )
            }) 
        }
    </>
  )
}

export default GantryMotorTestPage