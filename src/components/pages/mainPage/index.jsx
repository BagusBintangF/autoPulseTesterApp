import React from 'react'
import SideBar from '../../fragments/sideBar'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <>  
        <div className="flex w-full">   
            <div className="">
                <SideBar/>
            </div>   
            <div className="flex flex-row flex-wrap w-full h-full justify-center">
                <Outlet/>
            </div>
        </div>
        
    </>
  )
}

export default MainPage