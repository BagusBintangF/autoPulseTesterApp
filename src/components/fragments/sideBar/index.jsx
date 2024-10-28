import React from 'react'
import { Link } from 'react-router-dom'
import EepromIcon from '../../elements/eepromIcon'
import StationIcon from '../../elements/stationIcon'
import GantryIcon from '../../elements/gantryIcon'
import RebootIcon from '../../elements/rebootIcon'
import ShutdownIcon from '../../elements/shutdownIcon'
import useApiHookWithAlertBar from '../../../hook/useApiHookWithAlert'
import UseApiHook from '../../../hook/useApiHook'

const SideBar = () => {
  return (
    <>
        <div className="sticky top-0 z-30 relative flex flex-col bg-clip-border bg-slate-800 text-gray-700 w-full h-screen xl:min-w-[14rem] min-w-[10rem] xl:p-4 p-2 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-2 pl-4">
                <h5 className="antialiased tracking-normal font-sans xl:text-xl text-sm  font-semibold leading-snug text-gray-100">autoPulse E-Test</h5>
            </div>
            <nav className="flex flex-col gap-1 xl:min-w-[240px] min-w-[100px] xl:p-2 p-0.5 font-sans xl:text-base text-sm font-normal text-gray-100">
                <Link to={'eeprom/'} role="button" tabIndex="0" className="flex items-center w-full xl:p-3 p-1 pt-3 pb-3 xl:rounded-lg rounded-md text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div className="grid place-items-center mr-4">
                    <EepromIcon/>
                </div>                                   
                EEPROM
                </Link>
                <Link to={'station/'} role="button" tabIndex="0" className="flex items-center w-full xl:p-3 p-1 pt-3 pb-3 xl:rounded-lg rounded-md text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div className="grid place-items-center mr-4">
                    <StationIcon/>
                </div>                                   
                Station
                </Link>
                <Link to={'gantry/'} role="button" tabIndex="0" className="flex items-center w-full xl:p-3 p-1 pt-3 pb-3 xl:rounded-lg rounded-md text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div className="grid place-items-center mr-4">
                    <GantryIcon/>
                </div>
                Gantry
                </Link>
            </nav>
            <div className='absolute bottom-[1rem] xl:min-w-[14rem] min-w-[9rem]'>
                <nav className="flex flex-col static  gap-1 xl:min-w-[240px] min-w-[100px] xl:p-2 p-0.5 font-sans xl:text-base text-sm font-normal text-gray-100" >
                <Link onClick={() => UseApiHook("reboot-device")} role="button" tabIndex="0" className="flex items-center w-full xl:p-3 p-1 pt-3 pb-3 xl:rounded-lg rounded-md text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div className="grid place-items-center mr-4">
                    <RebootIcon/>
                </div>
                Reboot
                </Link>
                <Link onClick={()=> UseApiHook("shutdown-device")} role="button" tabIndex="0" className="flex items-center w-full xl:p-3 p-1 pt-3 pb-3 xl:rounded-lg rounded-md text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div className="grid place-items-center mr-4">
                    <ShutdownIcon/>
                </div>
                Shutdown
                </Link>
                <div className='flex flex-col justify-center items-center w-full pt-2'><p className='text-gray-100 text-sm'>EE-TFF © v1.0.0</p></div>
            </nav>
            </div>
            
            {/* <div className='absolute flex flex-col justify-center items-center bottom-[1rem] left-[1rem] w-full'><p className='text-gray-100 text-sm'>EE-TFF © v1.0.0</p></div> */}
        </div>

    </>
  )
}

export default SideBar
