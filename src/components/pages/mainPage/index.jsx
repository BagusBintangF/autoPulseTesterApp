import React from 'react'
import SideBar from '../../fragments/sideBar'
import DialogBar from '../../fragments/dialogBar'
import StationPage from '../../fragments/stationPage'

const MainPage = () => {
  return (
    <>  
        <div className="flex">   
            <div className="">
                <SideBar/>
            </div>   
            <div className="flex flex-row flex-wrap">
                {/* <nav className="block z-20 bg-clip-border h-20 sticky top-0 shadow-xl shadow-blue-gray-900/70 bg-white p-6"> 
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Station Testing Page</h5>
                </nav>
                <div>
                    <DialogBar/>
                </div>
                <div>
                    <DialogBar/>
                </div>
                <div>
                    <DialogBar/>
                </div>
                <div>
                    <DialogBar/>
                </div> */}
                <StationPage/>
            </div>
        </div>
        
    </>
  )
}

export default MainPage