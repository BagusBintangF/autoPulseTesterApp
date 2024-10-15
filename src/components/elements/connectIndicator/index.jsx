import React from 'react'

const ConnectIndicator = (props) => {
  let status = "Disconnected"
  let bgColor = "bg-rose-500"
  if(props.connectionStatus == 1){
    status = "Connected"
    bgColor = "bg-green-500"
  }
  else{
    status = "Disconnected"
    bgColor = "bg-rose-500"
  }
  return (
    <div className={`${bgColor} text-white h-5 rounded-md text-sm pl-2 pr-2 font-medium`}>{status}</div>
  )
}

export default ConnectIndicator