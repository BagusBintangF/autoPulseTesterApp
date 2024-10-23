import React from 'react'
import DialogBar from '../dialogBar';
import DialogBarWithContent from '../dialogBarWithContent';
import BackIcon from '../../elements/backIcon';
import useApiHookWithAlertBar from '../../../hook/useApiHookWithAlert';
import LoadingPage from '../loadingPage';
import AlertBar from '../alertBar';

const StationLoadCellTestPage = (props) => {
    const {data, error, loading, showAlert, handleClose, fetchData} = useApiHookWithAlertBar()

    const gantryMotorDialogContent=[
        {
            id:0,
            title:"Testing Load Cell Station",
            content:"Klik tombol Run lalu tunggu beberapa saat hingga proses selesai, perhatikan informasi yang muncul pada Alert Bar, Load Cell dikatakan baik jika muncul notifikasi Load Cell : GOOD",
            testing:[
                {   
                    testId : 0,
                    testName:"Load Cell 1",
                    direction:"load-cell-station/0"
                },
                {
                    testId : 1,
                    testName:"Load Cell 2",
                    direction:"load-cell-station/1",
                },
                {   
                    testId : 2,
                    testName:"Load Cell 3",
                    direction:"load-cell-station/2"
                },
            ]
        },
    ];

    return (
    <>
        {loading && <LoadingPage/>}
        {error && showAlert &&(<AlertBar title="Opps !" message="Error" status={error}/>)}
        {data && showAlert && (<AlertBar title={data.deviceName} message={data.message} status={data.status} onClose={handleClose}/>)}
        <nav className="static flex  z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <BackIcon direction="/station/"/>
            <h5 className="item-center inline-block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Load Cell Testing Page</h5>
        </nav>
        {
            gantryMotorDialogContent.map(function (contentDialog){
                return(
                    <DialogBarWithContent key={contentDialog.id} contentId={contentDialog.id} title={contentDialog.title} content={contentDialog.content} testing={contentDialog.testing} fetchData={fetchData}/>    
                )
            }) 
        }
    </>
  )
}

export default StationLoadCellTestPage