import React from 'react'
import SideBar from '../../fragments/sideBar'
import DialogBar from '../../fragments/dialogBar'

const MainPage = () => {
  return (
    <>  
        <div className="flex">   
            <div className="">
                <SideBar/>
            </div>   
            <div className="flex flex-col flex-wrap">
                <nav className="block h-20 sticky top-0  shadow-xl shadow-blue-gray-900/70 bg-white"> Station Page</nav>
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
                </div>
            </div>
        </div>
        
    </>
  )
}

export default MainPage