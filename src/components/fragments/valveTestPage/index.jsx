import React from 'react'

const ValveTestPage = () => {
  return (
    <div>
        <nav className="flex flex-row z-20 bg-clip-border xl:h-20 h-15 w-full sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
            <span role="button" className="leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                </svg>
            </span>
            <h5 className="block ml-4 antialiased tracking-normal font-sans xl:text-xl text-md font-semibold leading-snug text-gray-900">Valve Testing Page</h5>
        </nav>
    </div>
  )
}

export default ValveTestPage