import React from 'react'
import ProgressBar from '../progressBar';

const EepromPage = () => {

    const eepromDialogContent=[
        {
            id:0,
            title:"Y Axis Board",
            precentage:"0",
        },
        {
            id:1,
            title:"X Axis Board",
            precentage:"30",
        },
        {
            id:2,
            title:"Z Axis Board",
            precentage:"40",
        },
        {
            id:3,
            title:"Gripper Board",
            precentage:"60",
        },
        {
            id:4,
            title:"Concentration Station",
            precentage:"80",
        },
        {
            id:5,
            title:"Cleaning Station",
            precentage:"90",
        },
        {
            id:6,
            title:"IO Board",
            precentage:"100",
        },
    ];

    return (
    <>
        <nav key="eepromPageNav" className="relative z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 right-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            {/* <span role="button" className="leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                </svg>
            </span> */}
            <h5 className="block antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Setting EEPROM</h5>
        </nav>
        <div key="eepromPageBody" className="w-full m-6 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
            <p className="p-2 text-justify">Untuk upload konfigurasi EEPROM klik tombol {"\t"} 
                {
                <svg className="inline-block h-6 w-6 stroke-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="stroke-cyan-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
                 </svg>
                 } {"\t"}
            setelah proses selesai klik tombol {"\t"}
                {
                    <svg className="inline-block w-6 h-6 stroke-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="stroke-cyan-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"/>
                    </svg>
                } {"\t"}
            untuk cek apakah konfigurasi sudah berhasil diupload</p>
            {
            eepromDialogContent.map(function (contentDialog){
                return(
                    <ProgressBar key={contentDialog.id} contentId={contentDialog.id} progressBarName={contentDialog.title} barPrecentage={contentDialog.precentage}/>    
                )
            })
            
            }
            
        </div>
    </>
  )
}

export default EepromPage