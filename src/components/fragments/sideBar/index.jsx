import React from 'react'

const SideBar = () => {
  return (
    <>
        <div className="sticky top-0 z-30 relative flex-col bg-clip-border bg-slate-800 text-gray-700 w-full h-screen xl:max-w-[14rem] max-w-[10rem] xl:p-4 p-2 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-2 pl-4">
                <h5 className="block antialiased tracking-normal font-sans xl:text-xl text-sm  font-semibold leading-snug text-gray-100">autoPulse E-Test</h5>
            </div>
            <nav className="flex flex-col gap-1 xl:min-w-[240px] min-w-[100px] xl:p-2 p-0.5 font-sans xl:text-base text-sm font-normal text-gray-100">
                <div role="button" tabIndex="0" className="flex items-center w-full xl:p-3 p-1 pt-3 pb-3 xl:rounded-lg rounded-md text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div className="grid place-items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path fillRule="evenodd" d="M15 4H9v16h6V4Zm2 16h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v16ZM4 4h3v16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" clipRule="evenodd"></path>
                    </svg>
                </div>
                Station
                </div>
                <div role="button" tabIndex="0" className="flex items-center w-full xl:p-3 p-1 pt-3 pb-3 xl:rounded-lg rounded-md text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <div className="grid place-items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path fillRule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm0 8v6h7v-6H4Zm16 6h-7v-6h7v6Z" clipRule="evenodd"></path>
                    </svg>
                </div>
                Gantry
                </div>
            </nav>
        </div>

    </>
  )
}

export default SideBar
