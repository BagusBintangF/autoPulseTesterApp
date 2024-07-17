import React from 'react'
import ButtonSmall from '../../elements/button'

const DialogBar = () => {
  return (
    <div className="w-100 h-100 m-6 rounded bg-white text-gray-700 p-5 shadow-xl shadow-blue-gray-900/5">
        <h2 className="font-semibold p-2">Valve Test</h2>
        <p className="p-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam laudantium dolor perferendis natus soluta earum placeat recusandae, corrupti suscipit!</p>
        <div className="p-4">
            <ButtonSmall/>
        </div>
        
    </div>
  )
}

export default DialogBar