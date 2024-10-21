import React from 'react'
import './style.css' 

const LoadingPage = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 flex justify-center items-center w-full h-full bg-slate-400 opacity-40 z-30">
      <div className="loader" ></div>
    </div>
  )
}

export default LoadingPage