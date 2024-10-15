import React, { useEffect, useState } from 'react'
import ProgressBar from '../progressBar';
import UploadIcon from '../../elements/uploadIcon';
import CheckIcon from '../../elements/checkIcon';

const EepromPage = () => {
    const [connectionStatus, setConnectionStatus] = useState([])

    const fetchDataConnection = async ()=>{
        const response = await fetch("http://127.0.0.1:8000/connect/status/")
        try{
            if(!response.ok){
                throw new Error('Network response was not OK')
            }
            const data = await response.json()
            setConnectionStatus(data)
            console.log(data)
        }
        catch(error){
            console.error("Fetch Fail:",error)
        }
    }
    useEffect(()=>{
        fetchDataConnection()
    },[])

    const eepromDialogContent=[
        {
            id:0,
            title:"Y Axis Board",
            status:`${connectionStatus[0]}`,
        },
        {
            id:1,
            title:"X Axis Board",
            status:`${connectionStatus[1]}`,
        },
        {
            id:2,
            title:"Z Axis Board",
            status:`${connectionStatus[2]}`,
        },
        {
            id:3,
            title:"Gripper Board",
            status:`${connectionStatus[3]}`,
        },
        {
            id:4,
            title:"Concentration Station",
            status:`${connectionStatus[4]}`,
        },
        {
            id:5,
            title:"Cleaning Station",
            status:`${connectionStatus[5]}`,
        },
        {
            id:6,
            title:"IO Board",
            status:`${connectionStatus[6]}`,
        },
    ];

    return (
    <>
        <nav key="eepromPageNav" className="relative z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 right-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <h5 className="block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Setting EEPROM</h5>
        </nav>
        <div key="eepromPageBody" className="w-full m-6 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
            <p className="p-2 text-justify">Untuk upload konfigurasi EEPROM klik tombol {"\t"} {<UploadIcon/>} {"\t"} setelah proses selesai klik tombol {"\t"}{<CheckIcon/>} {"\t"} untuk cek apakah konfigurasi sudah berhasil diupload</p>
            {
            eepromDialogContent.map(function (contentDialog){
                return(
                    <ProgressBar key={contentDialog.id} contentId={contentDialog.id} progressBarName={contentDialog.title} status={contentDialog.status}/>    
                )
            })
            }
        </div>
    </>
  )
}

export default EepromPage