import React from 'react'
import SideBar from '../../fragments/sideBar'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <>  
        <div className="flex">   
            <div className="">
                <SideBar/>
            </div>   
            <div className="flex flex-row flex-wrap">
                <Outlet/>
            </div>
        </div>
        
    </>
  )
}

export default MainPage