import React from 'react'
import IndicatorBar from '../indicatorBar'

const DialogBarWithIndicator = (props) => {
  return (
    <div key={props.contentId} className="relative xl:w-[25rem] w-full m-6 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
        <h2 className="font-semibold p-2">{props.title}</h2>
        <p className="p-2 text-justify">{props.content}</p>
        {
          props.testing.map(function (testingDialog){
            return(
              <IndicatorBar key={`${testingDialog.boarName}${testingDialog.sensorId}`} progressBarName={testingDialog.boarName} sensorState={testingDialog.isOn} />  
            )
          })
        }
    </div>
  )
}

export default DialogBarWithIndicator